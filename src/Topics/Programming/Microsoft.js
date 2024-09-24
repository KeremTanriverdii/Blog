import React from 'react'
import '../../App.css'
import Comments from '../../Components/Comments'
import deepClean from '../../assets/Programming/microsoft/deep-cleanup.jpg';

function Microsoft() {
    return (
        <div>
            <h3 className='mb-5'>Microsoft’un Yeni Tanıtımını Yaptığı Bilgisayar Hızlandırma Aracı, Bilgisayarınızı Yavaşlatabilir</h3>
            <p className='mt-4'>Bilgisayarınızı hızlandırması gereken PC Manager, bunun için kritik olan bazı dosyaları silebilir.</p>
            <p> Microsoft, kendi uygulama mağazasında, Windows 11 kullanıcıları için PC Manager programını çıkardı. Bilgisayar optimizasyonu için geçmişte farklı programlar kullanan kişiler de yerleşik olarak kullanabilecekleri bu yeni alternatife şans veriyor.
                Microsoft PC Manager’da yer alan derin temizleme (deep clean) seçeneği, bilgisayarın tutarlılığı için kritik değer taşıyan dosyaları silebiliyor. </p>
            <h4>
                <svg className='filled-greater-than' viewBox="0 0 100 100">
                    <polygon points="10,10 90,50 10,90" />
                </svg>
                Prefetch klasöründeki tüm dosyalar siliniyor.
            </h4>
            <img className='img-fluid' src={deepClean} />
            <p>Kabaca programlarınızın daha hızlı açılmasını ve adreslere daha kolay ulaşmanızı sağlayan bu klasördeki dosyaların aslında çok sayıda birikmeden temizlenmesi tavsiye ediliyor. Fakat içindeki dosyaların silinmesi, söz konusu programlarınızın açılışında veya bilgisayarınızın genel kullanımında daha çok RAM kullanımına sebep olduğundan bunun sık sık yapılması önerilmiyor.</p>
            <p>Dosyaları sildiğinizde, zaman içinde kaybolan bellek kullanımı artışı ve yavaşlama da gözünüze çarpacaktır. PC Manager’ın bunu gözü kapalı yapması da bu noktada problem kabul ediliyor.</p>
            <p>
                Yani bu dosyaları silmek her ne kadar depolama alanı açılmasını sağlasa da genel bilgisayar deneyimini kötü yönde etkileyecektir; en azından bu gibi konulara karışmayan gündelik kullanıcı için bunu söyleyebiliriz. Eğer bu yönde bir endişeniz varsa PC Manager kullanırken Deep Cleaning seçeneğinden uzak durmanızı öneriyoruz. Tabii PC Manager'ın temizlik haricinde sunduğu birçok faydalı araç var. Onlara da alttaki içeriğimizden göz atabilirsiniz.
            </p>

            <Comments />
        </div>
    )
}

export default Microsoft