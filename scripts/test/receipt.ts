import { ethers } from "hardhat";

async function main() {
  // const receipt = await ethers.provider.getTransactionReceipt(
  //   "0x9c1a31c383e3874e2dc38d074aa412d7cfc0bf021fe4c5d16f3ca74f7f2c0104"
  // );
  // console.log(receipt);
  const trace = await ethers.provider.send("trace_transaction", [
    "0xafdb89501caa8c74eb8c8cadc55674f218a23907d8ad2b5cab68ae5e0bf54149",
  ]);
  console.log(trace);

  // let bytedata =
  //   "0x0194db8e00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000035c000000000000000000000000000000000000000000000000000000000000003f000000000000000000000000000000000000000000000000000000000000035900000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000000000000000000000000000000000000000116000000000000000000000000000000000000000000000000000000000000004400000000000000000000000000000000000000000000000000000000000003cb00000000000000000000000000000000000000000000000000000000000000b0000000000000000000000000000000000000000000000000000000000000012100000000000000000000000000000000000000000000000000000000000001cd000000000000000000000000000000000000000000000000000000000000030200000000000000000000000000000000000000000000000000000000000000850000000000000000000000000000000000000000000000000000000000000115000000000000000000000000000000000000000000000000000000000000035000000000000000000000000000000000000000000000000000000000000000db00000000000000000000000000000000000000000000000000000000000001d00000000000000000000000000000000000000000000000000000000000000123000000000000000000000000000000000000000000000000000000000000024900000000000000000000000000000000000000000000000000000000000000690000000000000000000000000000000000000000000000000000000000000321000000000000000000000000000000000000000000000000000000000000038f00000000000000000000000000000000000000000000000000000000000001bd00000000000000000000000000000000000000000000000000000000000000aa000000000000000000000000000000000000000000000000000000000000019600000000000000000000000000000000000000000000000000000000000003cf0000000000000000000000000000000000000000000000000000000000000042000000000000000000000000000000000000000000000000000000000000010300000000000000000000000000000000000000000000000000000000000003480000000000000000000000000000000000000000000000000000000000000359000000000000000000000000000000000000000000000000000000000000031a000000000000000000000000000000000000000000000000000000000000026b0000000000000000000000000000000000000000000000000000000000000317000000000000000000000000000000000000000000000000000000000000025d00000000000000000000000000000000000000000000000000000000000000f800000000000000000000000000000000000000000000000000000000000001aa000000000000000000000000000000000000000000000000000000000000017700000000000000000000000000000000000000000000000000000000000000f4000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000aa00000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000002a0000000000000000000000000000000000000000000000000000000000000023e000000000000000000000000000000000000000000000000000000000000025e000000000000000000000000000000000000000000000000000000000000033200000000000000000000000000000000000000000000000000000000000002fc0000000000000000000000000000000000000000000000000000000000000167000000000000000000000000000000000000000000000000000000000000008100000000000000000000000000000000000000000000000000000000000003380000000000000000000000000000000000000000000000000000000000000237000000000000000000000000000000000000000000000000000000000000011400000000000000000000000000000000000000000000000000000000000003a3000000000000000000000000000000000000000000000000000000000000035f000000000000000000000000000000000000000000000000000000000000021a0000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000003d00000000000000000000000000000000000000000000000000000000000003300000000000000000000000000000000000000000000000000000000000000152000000000000000000000000000000000000000000000000000000000000012c000000000000000000000000000000000000000000000000000000000000021c0000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000018100000000000000000000000000000000000000000000000000000000000002c9000000000000000000000000000000000000000000000000000000000000016400000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000241000000000000000000000000000000000000000000000000000000000000012d000000000000000000000000000000000000000000000000000000000000020b00000000000000000000000000000000000000000000000000000000000000eb000000000000000000000000000000000000000000000000000000000000026100000000000000000000000000000000000000000000000000000000000003c300000000000000000000000000000000000000000000000000000000000003b6000000000000000000000000000000000000000000000000000000000000039700000000000000000000000000000000000000000000000000000000000001f8000000000000000000000000000000000000000000000000000000000000022800000000000000000000000000000000000000000000000000000000000002dc000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000003d7000000000000000000000000000000000000000000000000000000000000013b00000000000000000000000000000000000000000000000000000000000001ef000000000000000000000000000000000000000000000000000000000000005f00000000000000000000000000000000000000000000000000000000000001ae00000000000000000000000000000000000000000000000000000000000001550000000000000000000000000000000000000000000000000000000000000232000000000000000000000000000000000000000000000000000000000000035a000000000000000000000000000000000000000000000000000000000000038d000000000000000000000000000000000000000000000000000000000000030c000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000002c800000000000000000000000000000000000000000000000000000000000003520000000000000000000000000000000000000000000000000000000000000212000000000000000000000000000000000000000000000000000000000000026b000000000000000000000000000000000000000000000000000000000000030300000000000000000000000000000000000000000000000000000000000003690000000000000000000000000000000000000000000000000000000000000091000000000000000000000000000000000000000000000000000000000000017e000000000000000000000000000000000000000000000000000000000000029200000000000000000000000000000000000000000000000000000000000001fa00000000000000000000000000000000000000000000000000000000000002da00000000000000000000000000000000000000000000000000000000000002d600000000000000000000000000000000000000000000000000000000000000b0";

  // bytedata = bytedata.slice(10 + 64 + 64);
  // console.log(bytedata.length / 64);
  // let sum = 0;
  // for (let i = 0; i < bytedata.length / 64; i++) {
  //   const numb = bytedata.slice(i * 64, (i + 1) * 64);
  //   sum += parseInt(numb, 16);
  // }
  // console.log(sum);
}

main();
