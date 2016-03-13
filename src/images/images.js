class Images {
  static images = {
    benningtonSt: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/10_bennington_st.png",
    brooksSt: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/10_brooks_st.png",
    maverickStreet21: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/21_maverick_st.png",
    maverickStreet17: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/17_maverick_st.png",
    saratogaPorch: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/22_saratoga_porch.png",
    saratogaStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/22_saratoga_street.png",
    chelseaStreet25: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/25_chelsea_st.png",
    chelseaStreet35: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/35_chelsea_street.png",
    lubecStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/64_lubec_street.png",
    goveStreetMailbox: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/gove_street_mailboxes.png",
    goveStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/gove_street.png"
  }

  static eagerLoad = () => {
    Object.keys(Images.images).forEach( (key) => {
      let i = new Image();
      i.src = Images.images[key];
    });
  }
}

export default Images;
