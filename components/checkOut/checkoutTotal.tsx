type Props = {
    subtotal: number
    }

    export default function CheckoutTotal({ subtotal }: Props) {

    const formatRupiah = (angka: number) => {
        return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
        }).format(angka)
    }

    return (
        <div className="border rounded-lg p-6 h-fit">

        <h2 className="font-semibold mb-4">
            Ringkasan Pesanan
        </h2>

        <div className="space-y-2 text-sm">

            <div className="flex justify-between">
            <span>Kursi Kayu Minimalis</span>
            <span>Rp350.000</span>
            </div>

            <div className="flex justify-between">
            <span>Meja Tamu Modern</span>
            <span>Rp950.000</span>
            </div>

            <hr />

            <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatRupiah(subtotal)}</span>
            </div>

            <div className="flex justify-between">
            <span>Ongkir</span>
            <span>Rp0</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>{formatRupiah(subtotal)}</span>
            </div>

        </div>

        <button className="w-full mt-6 border rounded-lg py-2 hover:bg-gray-100">
            Bayar Sekarang
        </button>

        </div>
    )
}