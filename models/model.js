class Model {

    mnemonics = async () => {
        try {
          let response = await fetch ("https://api.hopae.app/v1/identities/mnemonic", {
            method : "GET",
            "Content-Type" : "application/json"
          });
    
          let json = await response.json();
          if (response.ok) {
            return json;
          }
        } catch (err) {
          return false;
        }
      };
}

export default new Model();