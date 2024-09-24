import React from 'react'
import ipadPro from '../../assets/Technology/Ipad/ipadpro.jpg'
import Comments from '../../Components/Comments'

const ipad = () => {
    return (
        <div>
            <h2 className='mb-3'>
                OLED Ekranlı iPad Pro'nun Geliştirme Aşamasında Olduğu İddia Edildi
            </h2>
            <img className='img-fluid' src={ipadPro} alt='İpad Pro' />

            <p>
                Apple’ın önümüzdeki aylarda piyasaya sürülecek yeni iPad Pro modellerinde
                kullanacağı yeni ekranlar hakkında enteresan bir iddia ortaya atıldı.
            </p>

            <p>İddia:
                bu cihazların ekran panellerini çoktan geliştirmeye başladı, ancak önceki
                modellerden çok farklı bir cam geliştiriliyor.
            </p>

            <h4 className='mb-5'>
                <svg className='filled-greater-than' viewBox="0 0 100 100">
                    <polygon points="10,10 90,50 10,90" />
                </svg>
                İddiaya göre iPad Pro 2024 modelleri için OLED ekranlar geliştiriliyor,
                ancak koruyucu ekran olmadığında oldukça kırılganlar
            </h4>

            <p>
                Söylediğine göre geliştirilmekte olan dört prototip var ve tabletler 11 inç
                ve 13 inç ekran boyutuna sahip.
            </p>

            <p>
                Sızıntının garip olan kısmı ise Apple'ın iPhone’da kullandığı aynı esnek OLED
                teknolojisini kullanmayacağı. Bunun yerine daha kırılgan olan bir versiyona,
                yani sert OLED ekranlara geçilecek. Bu ekranlar sektörde sıkça kullanılan
                ekranlar, hatta Google bile Pixel cihazlarında kullanılıyor. Sık
                kullanılmasının sebebi, üretiminin çok ucuz olması.
            </p>


            <Comments />
        </div>
    )
}

export default ipad