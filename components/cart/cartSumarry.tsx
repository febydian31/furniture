import Link from "next/link";
interface CartSummaryProps {
    totalProduk: number;
    subtotal: number;
    formatRupiah: (angka: number) => string;
    }

    export default function CartSummary({
    totalProduk,
    subtotal,
    formatRupiah,
    }: CartSummaryProps) {
    return (
        <div className="border rounded-lg p-6 h-fit">

        <h2 className="font-semibold mb-4">
            Ringkasan Pesanan
        </h2>

        <div className="space-y-2 text-sm">

            <div className="flex justify-between">
            <span>Jumlah Produk</span>
            <span>{totalProduk}</span>
            </div>

            <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatRupiah(subtotal)}</span>
            </div>

            <div className="flex justify-between">
            <span>Ongkir</span>
            <span>Rp0</span>
            </div>

            <div className="flex justify-between">
            <span>Pajak</span>
            <span>Rp0</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatRupiah(subtotal)}</span>
            </div>

        </div>

        <Link
            href="/shop/checkOut"
            className="block w-full mt-6 border rounded-lg py-2 text-center hover:bg-gray-100"
            >
            Lanjut ke Checkout
            </Link>

        </div>
    );
}