import Photon from "../../generated/photon";

let PHOTON_INSTANCE;

export const db = () => {
  if (PHOTON_INSTANCE) {
    return PHOTON_INSTANCE;
  }

  const photon = new Photon();
  PHOTON_INSTANCE = photon;
  return PHOTON_INSTANCE;
};
