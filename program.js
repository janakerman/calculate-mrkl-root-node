(function() {

  var crypto = require('crypto');

  var rawBlock = {
    "hash":"00000000000000001e8d6829a8a21adc5d38d0a473b144b6765798e61f98bd1d",
    "ver":1,
    "prev_block":"00000000000008a3a41b85b8b29ad444def299fee21793cd8b9e567eab02cd81",
    "mrkl_root":"2b12fcf1b09288fcaff797d71e950e71ae42b91e8bdb2304758dfcffc2b620e3",
    "time":1305998791,
    "bits":440711666,
    "nonce":2504433986,
    "n_tx":4,
    "size":1496,
    "tx":[
      {
        "hash":"51d37bdd871c9e1f4d5541be67a6ab625e32028744d7d4609d0c37747b40cd2d",
        "ver":1,
        "vin_sz":1,
        "vout_sz":1,
        "lock_time":0,
        "size":135,
        "in":[
          {
            "prev_out":{
              "hash":"0000000000000000000000000000000000000000000000000000000000000000",
              "n":4294967295
            },
            "coinbase":"04f2b9441a022a01"
          }
        ],
        "out":[
          {
            "value":"50.01000000",
            "scriptPubKey":"04d879d5ef8b70cf0a33925101b64429ad7eb370da8ad0b05c9cd60922c363a1eada85bcc2843b7378e226735048786c790b30b28438d22acfade24ef047b5f865 OP_CHECKSIG"
          }
        ]
      },
      {
        "hash":"60c25dda8d41f8d3d7d5c6249e2ea1b05a25bf7ae2ad6d904b512b31f997e1a1",
        "ver":1,
        "vin_sz":1,
        "vout_sz":2,
        "lock_time":0,
        "size":259,
        "in":[
          {
            "prev_out":{
              "hash":"738d466ff93e7857d07138b5a5a75e83a964e3c9977d2603308ecc9b667962ad",
              "n":0
            },
            "scriptSig":"30460221009805aa00cb6f80ca984584d4ca40f637fc948e3dbe159ea5c4eb6941bf4eb763022100e1cc0852d3f6eb87839edca1f90169088ed3502d8cde2f495840acac69eefc9801 0486477e6a23cb25c9a99f0c467c6fc86197e718ebfd41d1aef7cc3cbd75197c1f1aaba985b22b366a0729ccb8aa38277809d6d218cf4077ac9f29a953b5435222"
          }
        ],
        "out":[
          {
            "value":"0.50000000",
            "scriptPubKey":"OP_DUP OP_HASH160 6f31097e564b9d54ebad662d5c4b5621c18ff523 OP_EQUALVERIFY OP_CHECKSIG"
          },
          {
            "value":"29.00000000",
            "scriptPubKey":"OP_DUP OP_HASH160 7228033b48b380900501c39c61da4ab453ca88e8 OP_EQUALVERIFY OP_CHECKSIG"
          }
        ]
      },
      {
        "hash":"01f314cdd8566d3e5dbdd97de2d9fbfbfd6873e916a00d48758282cbb81a45b9",
        "ver":1,
        "vin_sz":3,
        "vout_sz":2,
        "lock_time":0,
        "size":617,
        "in":[
          {
            "prev_out":{
              "hash":"c9b85295d9301d18e319bfe395ccaed6953c85c437dfc7cef97120c441f3195a",
              "n":0
            },
            "scriptSig":"3044022025bca5dc0fe42aca5f07c9b3fe1b3f72113ffbc3522f8d3ebb2457f5bdf8f9b2022030ff687c00a63e810b21e447d3a57b2749ebea553cab763eb9b99e1b9839653b01 04469f7eb54b90d90106b1a5412b41a23516028e81ad35e0418a4460707ae39a4bf0101b632260fb08979aba0ceea576b5400c7cf30b539b055ec4c0b96ab00984"
          },
          {
            "prev_out":{
              "hash":"dac1581d713ef11db9710f202f2103cc918af29499ddbd11352bb7b6f4d3725b",
              "n":0
            },
            "scriptSig":"3046022100fbef2589b7c52a3be0fd8dd3624445da9c8930f0e51f6a33d76dc0ca0304473d0221009ec433ca6a9f16184db46468ff39cafaa9643021e0c66a1de1e6f9a61209279001 04b27f4de096ac6431eec4b807a0d3db3e9f9be48faab692d5559624acb1faf4334dd440ebf32a81506b7c49d8cf40e4b3f5c6b6e99fcb6d3e8a298174bd2b348d"
          },
          {
            "prev_out":{
              "hash":"430fbe9aea0fc6ceb6065bf3a0e911a8c6b1ca438e16a3338471518873942e29",
              "n":1
            },
            "scriptSig":"30440220582813f2c2d7cbb84521f81d6c2a1147e5296e90bee05f583b3df108fdac72010220232b43a2e596cef59f82c8bfff1a310d85e7beb3e607076ff8966d6d374dc12b01 04a8514ca51137c6d8a4befa476a7521197b886fceafa9f5c2830bea6df62792a6dd46f2b26812b250f13fad473e5cab6dcceaa2d53cf2c82e8e03d95a0e70836b"
          }
        ],
        "out":[
          {
            "value":"0.01000000",
            "scriptPubKey":"OP_DUP OP_HASH160 429e6bd3c9a9ca4be00a4b2b02fd4f5895c14059 OP_EQUALVERIFY OP_CHECKSIG"
          },
          {
            "value":"4.85000000",
            "scriptPubKey":"OP_DUP OP_HASH160 e55756cb5395a4b39369d0f1f0a640c12fd867b2 OP_EQUALVERIFY OP_CHECKSIG"
          }
        ]
      },
      {
        "hash":"b519286a1040da6ad83c783eb2872659eaf57b1bec088e614776ffe7dc8f6d01",
        "ver":1,
        "vin_sz":2,
        "vout_sz":1,
        "lock_time":0,
        "size":404,
        "in":[
          {
            "prev_out":{
              "hash":"7ae1847583b78ea9534b2da74134aa89a4d013a6b31631e71a27b9026435a8c8",
              "n":1
            },
            "scriptSig":"30440220771ae3ed7f2507f5682d6f63f59fa17187f1c4bdb33aa96373e73d42795d23b702206545376155d36db49560cf9c959d009f8e8ea668d93f47a4c8e9b27dc6b3302301 048a976a8aa3f805749bf62df59168e49c163abafde1d2b596d685985807a221cbddf5fb72687678c41e35de46db82b49a48a2b9accea3648407c9ce2430724829"
          },
          {
            "prev_out":{
              "hash":"fec71848ed96aeef4bc10303b182aab03e565648ed3f6e0b36f748921c11f0a4",
              "n":1
            },
            "scriptSig":"304602210087fc57bd3ce0a03f0f7a3300a84dde8d5eba23dfdc64b8f2c17950c5213158d102210098141fbd22da33629cfc25b84d49b397144e1ec6287e0edd53dbb426aa6a72ed01 04dee3ef362ae99b46422c8028f900a138c872776b2fcffed3f9cd02ee4b068a6df516a50249ae6d8f420f9ce19cdfc4663961296a71cd62b04a2c8a14ff89b1d0"
          }
        ],
        "out":[
          {
            "value":"0.15000000",
            "scriptPubKey":"OP_DUP OP_HASH160 e43f7c61b3ef143b0fe4461c7d26f67377fd2075 OP_EQUALVERIFY OP_CHECKSIG"
          }
        ]
      }
    ],
    "mrkl_tree":[
      "51d37bdd871c9e1f4d5541be67a6ab625e32028744d7d4609d0c37747b40cd2d",
      "60c25dda8d41f8d3d7d5c6249e2ea1b05a25bf7ae2ad6d904b512b31f997e1a1",
      "01f314cdd8566d3e5dbdd97de2d9fbfbfd6873e916a00d48758282cbb81a45b9",
      "b519286a1040da6ad83c783eb2872659eaf57b1bec088e614776ffe7dc8f6d01",
      "0d0eb1b4c4b49fd27d100e9cce555d4110594661b1b8ac05a4b8879c84959bd4",
      "bfae954bdb9653ceba3721e85a122fba3a585c5762b5ca5abe117b30c36c995e",
      "2b12fcf1b09288fcaff797d71e950e71ae42b91e8bdb2304758dfcffc2b620e3"
    ]
  };

  var Block = function(rawBlock) {
    return {
      getTransactions: function() {
        return rawBlock.tx;
      }
    };
  };

  var reverseHex = function (hexString) {
    var splitByLength = function (string, splitLength) {
      var chunks = [];

      for (var i = 0, charsLength = string.length; i < charsLength; i += splitLength) {
        chunks.push(string.substring(i, i + splitLength));
      };

      return chunks;
    }

    return splitByLength(hexString, 2).reverse().join('');
  };

  var hex2Bin = function (hex) {
    var bytes = [];

    for(var i=0; i< hex.length-1; i+=2){
      bytes.push(parseInt(hex.substr(i, 2), 16));
    }

    return String.fromCharCode.apply(String, bytes);
  }

  var combineHashes = function (hash1, hash2) {
    // Reverse hex - reverse combined or individual?
    var combinedBinary = hex2Bin(reverseHex(hash1) + reverseHex(hash2));

    var pass1 = crypto.createHash('sha256').update(combinedBinary, 'binary').digest('binary');
    return reverseHex(crypto.createHash('sha256').update(pass1, 'binary').digest('hex'));
  }

  var layer = 0;

  console.log("=== Start Merkle Root Calculation ===\n");

  var calculateMerkleRoot = function(merkleTree) {
    if (merkleTree.length == 1) {
      return merkleTree[0];
    }

    console.log("=== Layer " + layer + " ===\n");

    if (merkleTree.length % 2 != 0) {
      merkleTree.push(merkleTree[merkleTree.length-1]);
    }

    var newLeaves = [];
    for (var x=0; x<merkleTree.length; x+=2) {

      console.log("=== Leave " + x + " ===\n");
      console.log("Hash1: " + merkleTree[x] + "\n");
      console.log("Hash2: " + merkleTree[x+1] + "\n");
      console.log("Result: " + combineHashes(merkleTree[x], merkleTree[x+1]) + "\n");

      newLeaves.push(combineHashes(merkleTree[x], merkleTree[x+1]));
    }

    layer++;

    return calculateMerkleRoot(newLeaves);
  }

  var block = new Block(rawBlock);

  var bottomNodes = block.getTransactions().map(function (current, index, array) {
    return current.hash;
  });

  console.log("=== Bottom Leaves ===");
  console.log(bottomNodes);

  var root = calculateMerkleRoot(bottomNodes);

  console.log("=== Merkle Root ===\n");
  console.log(root);

})();
