require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stove deny mirror puppy gown light army gift'; 
let testAccounts = [
"0xf6865018d8602942f8ec005552d4bf2c9d63055d5aa5f527005d21dd41defe65",
"0xb9b7f0df14e7515151eb5e54377ddd70685264ce891a0b40987195d2650d095a",
"0xd3900253abd8d48045192b610c5b350f86a186fcd455602afc4e4354b76649fb",
"0x7885bb1c3f4d6ac5fbc4e4eba9ede92a1117ba19d4692eb01ac869749232e46f",
"0x49d23a1e4015bae1fc3c18b08850b9fde418a7101c879a97c05c059a27e6edd0",
"0x9a6f8de086693150cdaccb6b28b7269bd7127f432344ed913cb421e89a5e1e72",
"0x54966068724f161148b980de2c11826fe47f63217b488db38676bb9f5927ba63",
"0xc3f6929aace483609ceb6deab944cd23594c88e86df201e7082013194bce6cdb",
"0x5bd2f68d64154f6fbfcd1fda37be9ba629092f47dd36e96bab77e7bb09dbd0ca",
"0x224f5914493ed45af337ee082eb374cda4ea799ce5c4057e80125196dceebe7a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

