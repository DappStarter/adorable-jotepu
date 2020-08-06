require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember evil inner clog bubble gas'; 
let testAccounts = [
"0x12b247b9cdd73496835bf92dd9356a8caa67d35dfc3e6d69ba687434cac7d104",
"0x858e6019a63c8a16d6619c4a888132589ae9893ded934a5f43e4cd4e54b223d2",
"0x26286d3231aea530362947a7a40a30475a00c48b03a8c89df236c0865822d9cc",
"0x373b54ef6ef641ee967ac94479a08c3743fb57ab92aef7603f1ff9d5589b8ad3",
"0x585e65bfbb8465d1ea4cfd91b678bbba9d47c270beda91666c898c0d829a452a",
"0x5424b32ac864f6881c1cba86ef5657622cfb827eae5c69375d432aca97833f70",
"0xb09a7fc84caa962a855727c0d496465233a01d1e5eab54584be5c04312c0e6b6",
"0xeb58011c392a5d478ee374903f0e4822e874ca30314a368540b92477286b0b11",
"0x7e50002a1eb2363072286df29c22f46a65b3d22791dc05096d5ffbda5fd90694",
"0xad67a1f877e6b9dda4ec2b610b9c1a0970a13e8e45c4d9f32d9731c91fcc6416"
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
            version: '^0.5.11'
        }
    }
};
