import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="bg-slate-50 py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Kata Mereka Tentang Furniture Kami</h2>
                    <p>Kami telah melayani ratusan pelanggan di seluruh Indonesia. Lihat apa yang mereka katakan tentang kualitas dan pelayanan kami.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    {/* Testimoni 1 - Besar */}
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    Meja makan slab jati yang saya pesan benar-benar luar biasa. Kayu solid tanpa sambungan, finishing sangat rapi, dan pengiriman ke Jakarta tepat waktu. Sangat puas dengan kualitasnya, akan memesan lagi untuk kantor saya.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                                            alt="Budi Santoso"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>BS</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Budi Santoso</cite>
                                        <span className="text-muted-foreground block text-sm">Arsitek, Jakarta</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    {/* Testimoni 2 */}
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    Kursi makan yang saya beli sangat nyaman dan kokoh. Desainnya minimalis tapi elegan, cocok dengan interior rumah saya. Pelayanan customer service juga sangat responsif.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                                            alt="Siti Nurhaliza"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>SN</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Siti Nurhaliza</cite>
                                        <span className="text-muted-foreground block text-sm">Ibu Rumah Tangga, Surabaya</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    {/* Testimoni 3 */}
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    Lemari pakaian custom yang saya pesan sesuai dengan ukuran yang diminta. Kayu jati Kalimantan berkualitas tinggi, finishing sangat halus. Sangat merekomendasikan furniture ini!
                                </p>

                                <div className="grid items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                                            alt="Ahmad Rizki"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>AR</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Ahmad Rizki</cite>
                                        <span className="text-muted-foreground block text-sm">Manajer, Bandung</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    {/* Testimoni 4 */}
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    Meja kerja yang saya beli sangat kokoh dan estetik. Cocok untuk WFH, tidak goyang sama sekali. Pengiriman cepat dan packaging sangat aman. Terima kasih!
                                </p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                                            alt="Dewi Lestari"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>DL</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Dewi Lestari</p>
                                        <span className="text-muted-foreground block text-sm">Freelancer, Yogyakarta</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}