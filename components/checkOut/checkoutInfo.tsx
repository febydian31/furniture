"use client"

export default function CheckoutInfo() {

    return (
        <div className="space-y-8">

        {/* INFORMASI PEMBELI */}
        <div className="border rounded-lg p-6">

            <h2 className="font-semibold mb-4">
            Informasi Pembeli
            </h2>

            <div className="space-y-4">

            <div className="flex justify-between items-start">

                <div className="text-sm space-y-1">
                <div className="flex gap-3">
                    <span className="font-medium">Febydian</span>
                    <span className="text-gray-500">081234567890</span>
                </div>

                <p className="text-gray-600 max-w-md">
                    Jl. Kaliurang KM 12, Ngaglik, Sleman,
                    Yogyakarta 55581
                </p>
                </div>

                <button className="text-sm border px-3 py-1 rounded-md hover:bg-gray-100">
                Ganti Alamat
                </button>

            </div>

            </div>

        </div>

        {/* METODE PENGIRIMAN */}
        <div className="border rounded-lg p-6">

            <h2 className="font-semibold mb-4">
            Metode Pengiriman
            </h2>

            <div className="space-y-2 text-sm">

            <label className="flex gap-2 items-center">
                <input type="radio" name="pengiriman" defaultChecked />
                Kurir Toko
            </label>

            <label className="flex gap-2 items-center">
                <input type="radio" name="pengiriman" />
                Ekspedisi Cargo
            </label>

            <label className="flex gap-2 items-center">
                <input type="radio" name="pengiriman" />
                Ambil di Toko
            </label>

            </div>

        </div>

        {/* METODE PEMBAYARAN */}
        <div className="border rounded-lg p-6">

            <h2 className="font-semibold mb-4">
            Metode Pembayaran
            </h2>

            <div className="space-y-2 text-sm">

            <label className="flex gap-2 items-center">
                <input type="radio" name="pembayaran" defaultChecked />
                Transfer Bank
            </label>

            <label className="flex gap-2 items-center">
                <input type="radio" name="pembayaran" />
                E-Wallet
            </label>

            <label className="flex gap-2 items-center">
                <input type="radio" name="pembayaran" />
                COD
            </label>

            </div>

        </div>

        </div>
    )
}