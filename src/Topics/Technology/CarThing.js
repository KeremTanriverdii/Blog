import React from 'react'
import device from '../../assets/Technology/Spotify/carthing2.jpg';
import Comments from '../../Components/Comments'

const game = () => {
    return (
        <div>
            <h3 className='mb-5'>
                Spotify, "Car Thing"
                Adlı Araç Ekipmanını Çöpe Attıracak
            </h3>

            <p className='mb-5'>
                Spotify'ın 2022 yılında üretimini sonlandırdığı Car
                Thing adlı araç içi kullanım aksesuarı, bu yılın sonunda çöp
                olacak.
            </p>

            <p className='mb-3'>
                Bir dönem kendi donanımlarını üretmeyi amaçlayan Spotify'ın bu çabası
                beklenen karşılığı vermemişti. Araç içinde kullanılması için üretilen
                Car Thing adlı aksesuar, 2022 yılından bu yana üretilmiyordu. Gelen
                haberlere göre bu aksesuar, 9 Aralık'tan itibaren kullanılamaz hâle
                gelecek.
            </p>
            <p className='mb-5'>
                Öte yandan Spotify, cihazlar için bir geri ödeme ya da uygulama içi
                kredi vermeyecek. Öte yandan firma bu cihazları açık kaynak kodlu hâle
                de getirmiyor. Onun yerine projeden tamamen vazgeçen Spotify,
                gönderdiği mail ile Car Thing sahiplerinden cihazları sorumluluk sahibi
                şekilde çöpe atmalarını istedi.
            </p>

            <h4>
                <svg className='filled-greater-than' viewBox="0 0 100 100">
                    <polygon points="10,10 90,50 10,90" />
                </svg>
                Spotify'dan "geri dönüşüme gönderme" tavsiyesi
            </h4>
            <img className='img-fluid w-100' src={device} alt='Car Things from Spotify' />

            <p>
                Firma Car Thing için ön siparişleri 2021 yılının Nisan ayında almaya
                başlamıştı. Sonrasında da ürün 90 dolardan satışa çıkmıştı. Beş ay
                sonra da cihazın üretimi sonlandırılmıştı.

                Car Thing donanımı aslında oldukça umut verici bir girişimdi ancak
                ortaya çıkan son ürün, akıllı telefondaki Spotify uygulamasının
                uzaktan kumandası olmaktan öteye gidememişti. Bu yüzden de ufak bir
                niş kitle dışında kimse cihazı almaya yanaşmamıştı. Yine de cihazın
                açık kaynak kodlu hâle getirilmesi daha ilginç kullanımlara yol
                açabilirdi.
            </p>

            <Comments />
        </div>
    )
}

export default game