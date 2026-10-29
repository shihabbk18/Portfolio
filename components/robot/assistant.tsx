"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Send, X } from "lucide-react";
import { useExperience } from "@/components/experience/experience-provider";
import { answerQuestion, type Answer } from "./knowledge";

type Message = Answer & { role: "user" | "assistant"; id: number };
const suggestions = ["What are your skills?", "Tell me about ModelDNA", "What is your research?", "How can I contact Shihab?"];
const RobotPreview = dynamic(() => import("./robot-preview"), { ssr: false, loading: () => <span className="robot-fallback" aria-hidden="true">◉‿◉</span> });

export function Assistant() {
  const { assistantOpen, setAssistantOpen, motionEnabled } = useExperience();
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState<{ id: number; answer: Answer } | null>(null);
  const speaking = pending !== null;
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "assistant", text: "Hi, I’m Shihab Bot. Ask me about Shihab’s research, skills, education, or projects." }]);
  const launcher = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const messageId = useRef(1);
  const previousProject = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!assistantOpen) return;
    input.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") { setAssistantOpen(false); launcher.current?.focus(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [assistantOpen, setAssistantOpen]);

  useEffect(() => {
    if (log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, assistantOpen]);

  useEffect(() => {
    if (!pending) return;
    let count = 0;
    const timer = window.setInterval(() => {
      count = Math.min(count + 2, pending.answer.text.length);
      const finished = count === pending.answer.text.length;
      setMessages((current) => current.map((message) => message.id === pending.id
        ? { ...message, text: pending.answer.text.slice(0, count), ...(finished ? pending.answer : {}) }
        : message));
      if (finished) { window.clearInterval(timer); setPending(null); }
    }, 26);
    return () => window.clearInterval(timer);
  }, [pending]);

  function ask(question: string) {
    const text = question.trim().slice(0, 600);
    if (!text || pending) return;
    const answer = answerQuestion(text, previousProject.current);
    previousProject.current = answer.projectId;
    const userId = messageId.current++;
    const answerId = messageId.current++;
    setMessages((current) => [...current.slice(-28), { id: userId, role: "user", text }, { id: answerId, role: "assistant", text: "" }]);
    setPending({ id: answerId, answer });
    setDraft("");

  }

  function close() { setAssistantOpen(false); launcher.current?.focus(); }
  function submit(event: FormEvent) { event.preventDefault(); ask(draft); }

  return <>
    <button ref={launcher} className="robot-launcher" type="button" aria-label={assistantOpen ? "Close Shihab Bot portfolio guide" : "Ask Shihab Bot about Shihab"} aria-expanded={assistantOpen} aria-controls="portfolio-assistant" onClick={() => assistantOpen ? close() : setAssistantOpen(true)}>
      <span className="robot-viewport" aria-hidden="true"><RobotPreview attentive={assistantOpen} speaking={speaking} motionEnabled={motionEnabled} /></span>
      <span className="robot-launcher__label"><MessageCircle size={12} aria-hidden="true" /> Ask Shihab Bot</span>
    </button>
    {assistantOpen && <aside id="portfolio-assistant" className="assistant-panel" aria-labelledby="assistant-title">
      <div className="assistant-header"><div><span>YOUR PORTFOLIO GUIDE</span><h2 id="assistant-title">Shihab Bot <i aria-hidden="true" /></h2></div><button type="button" onClick={close} aria-label="Close chat"><X size={18} /></button></div>
      <p className="assistant-note">Answers from Shihab’s portfolio. Runs locally; no chat is sent to a server.</p>
      <div ref={log} className="assistant-log" role="log" aria-live="polite" aria-busy={speaking} aria-relevant="additions" aria-label="Conversation with Shihab Bot">
        {messages.map((message) => <div className={`assistant-message assistant-message--${message.role}`} key={message.id}><span>{message.role === "assistant" ? "SHIHAB BOT" : "YOU"}</span><p>{message.text}{pending?.id === message.id && <span className="assistant-typing-cursor" aria-hidden="true">▍</span>}</p>{message.link && (message.link.href.endsWith(".pdf") ? <a href={message.link.href} target="_blank" rel="noreferrer">{message.link.label}<ArrowUpRight size={13} aria-hidden="true" /></a> : <Link href={message.link.href} onClick={close}>{message.link.label}<ArrowUpRight size={13} aria-hidden="true" /></Link>)}</div>)}
      </div>
      <div className="assistant-suggestions">{suggestions.map((question) => <button type="button" key={question} disabled={speaking} onClick={() => ask(question)}>{question}</button>)}</div>
      <form onSubmit={submit} className="assistant-input"><label className="sr-only" htmlFor="orbit-question">Ask about Shihab</label><input ref={input} id="orbit-question" value={draft} maxLength={600} onChange={(event) => setDraft(event.target.value)} placeholder="Ask about Shihab…" autoComplete="off" /><button type="submit" aria-label="Send question" disabled={!draft.trim() || speaking}><Send size={16} aria-hidden="true" /></button></form>
    </aside>}
  </>;
}
