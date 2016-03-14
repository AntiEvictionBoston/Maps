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
    goveStreet: "https://cdn.rawgit.com/AntiEvictionBoston/utility/dfab5a678abde8e1a175cb7b045090e7c62f6dec/images/gove_street.png",
    chilcott11: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/1-chilcott1.jpeg",
    oakwood31: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/3-oakwood1.jpeg",
    beach61: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/6-beach1.jpeg",
    rugglesstreet9131: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/9-13-ruggles-street1.jpeg",
    maverickst171: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/17-maverick-1.jpeg",
    riverstreet431: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/43-rosa-street1.jpeg",
    tremont611: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/61-tremont1.jpeg",
    johnny11: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/johnny-1.jpeg",
    johnny12: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/johnny-2.jpeg",
    rosastreet1: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/rosa-street-1.jpeg",
    rosastreet2: "https://cdn.rawgit.com/AntiEvictionBoston/utility/7a192a21ba9eca6391e08114eae87a5083dc0061/images/rosa-street-2.jpeg"
  }

  static eagerLoad = () => {
    Object.keys(Images.images).forEach( (key) => {
      let i = new Image();
      i.src = Images.images[key];
    });
  }
}

export default Images;
