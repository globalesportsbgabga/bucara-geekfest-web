import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-0JSY0XBMCR");
};

export const pageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};