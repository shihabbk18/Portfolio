# PORTFOLIO-
Compatibility site restoring the original GestureCam FX demo address. Portfolio lives at /Portfolio/.

The GitHub Pages workflow builds [GestureCam FX](https://github.com/shihabbk18/gesturecam-fx) from tested commit `938349d366644f4a3f77c71e73aebef38e0261be` and publishes it at:

https://shihabbk18.github.io/PORTFOLIO-/gesturecam-fx/

The compatibility site's root redirects to the current portfolio. It does not replace or redeploy the portfolio repository.

To update the demo, change the source commit in `.github/workflows/deploy-pages.yml`. Every deployment installs locked dependencies, runs lint and regression tests, and builds the app before publishing. The workflow can also be run manually from Actions.
