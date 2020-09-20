const request = require('request')
const credify = require("@credify/credify-js")

const handler = {
  GenKey: async (req, res) => {
    const mnemonic = req.body.mnemonic
    if (!mnemonic) return res.status(403).send('mnemonic is invalid!')
    const wallet = credify.createWallet(mnemonic, {
      apiKey: "4KcU8dUGk5MCiN7IZTcY",
      mode: "development"
      // mode: "local",
      // eosHost: "http://localhost:8888"
    })
    let signature = credify.signature(wallet)
    res.status(200).render('index', {
      pub_key: wallet.getMasterPublicKey(),
      pri_key: wallet.getMasterPrivateKey(),
      signature,
    })
  },
}

module.exports = { handler }
