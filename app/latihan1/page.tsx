export default function Testes() {
  return (
    <div className="h-screen flex flex-col justify-center">
      
      <div className="bg-green-200 h-screen w-60">

        <div className="flex items-center gap-4 p-4">
          <img src="grab.png" className="w-12 h-12 rounded-full" />
          <p className="text-black font-serif">Grab Indonesia</p>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <p className="text-black font-serif">Menu</p>

          <div className="flex items-center gap-2">
            <img src="burger.svg" className="w-6 h-6" />
            <h1 className="font-bold text-black">Food and Drink</h1>
          </div>

          <div className="flex items-center gap-2">
            <img src="car.svg" className="w-6 h-6" />
            <h1 className="font-bold text-black">Mobil</h1>
          </div>

          <div className="flex items-center gap-2">
            <img src="motorbike.svg" className="w-6 h-6" />
            <h1 className="font-bold text-black">Sepeda motor</h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <p className="text-black font-serif">Transaksi</p>

          <div className="flex items-center gap-2">
            <img src="cash.svg" className="w-6 h-6" />
            <h1 className="font-bold text-black">Gopay</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 px-5">
          <img src="transfer.svg" className="w-6 h-6" />
          <h1 className="font-bold text-black">Transfer</h1>
        </div>

        <div className="flex items-center gap-2 px-5 py-4">
          <img src="history.svg" className="w-6 h-6" />
          <h1 className="font-bold text-black">Riwayat Pembelian</h1>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <p className="text-black font-serif">Pengaturan</p>

          <div className="flex items-center gap-2">
            <img src="transfer.svg" className="w-6 h-6" />
            <h1 className="font-bold text-black">Transfer</h1>
          </div>
        </div>

      </div>

    </div>
  );
}