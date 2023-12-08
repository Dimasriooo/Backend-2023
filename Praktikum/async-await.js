// async digunakan untuk memberitahu ada proses asynchronous
// await digunakan untuk menunggu promise selesai
// await hanya bisa digunakan di dalam function

async function main() {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
}
 main();

const second = async () => {
    const hasilpersiapan = await persiapan();
    console.log( await persiapan());
    const hasilrebusAir = await rebusAir();
    console.log( await rebusAir());

    const hasilmasak = await masak();
    console.log( await masak());
};

second();


