import React from 'react'
import predict from '../../assets/Ai/euro/predict.jpg'
import Comments from '../../Components/Comments'

function Euro() {
    return (
        <div>
            <h3 className='mb-5'>EURO 2024'te Kazanan İspanya Oldu, Yapay Zekâ Skoru Bildi!
            </h3>

            <p className='mb-5'>Daha önceki maçlarda da kullandığımız ve zaman zaman doğru
                tahminleriyle de dikkat çeken yapay zekâmız bu defa EURO 2024 finalinin
                sonucunu tahmin etti.
            </p>

            <p className='mb-2'>
                Bir tarafta hem kulüpler hem de milli takım bazında kolay kolay final kaybetmeyen
                İspanya diğer tarafta ise şeytanın bacağını kırıp uluslararası bir turnuvada kupayı
                müzesine götürmek isteyen İngiltere yer alıyordu.
            </p>

            <p>
                Mediazone Games ve Sporanaliz'in geliştirdiği yapay zekâ destekli futbol simülasyonunu
                kullanıldı. Simülasyon maçın sonucunu doğru tahmin ederek turnuvayı başarılı bir
                tahmin ile tamamladı.
            </p>

            <h3 className='mt-5'>
                <svg className='filled-greater-than' viewBox="0 0 100 100">
                    <polygon points="10,10 90,50 10,90" />
                </svg>
                Yapay zeka kazananı tahmin etti
            </h3>
            <img className='img-fluid' src={predict} />

            <p>
                Her iki takımın oyun karakterlerini düşündüğümüzde böyle bir topla oynama oranı şaşırtıcı
                olmadı. Öte yandan yapay zekâya göre İspanya bir de penaltı kazanacaktı ancak penaltı
                kararı çıkmadı.
            </p>

            <p>
                Elbette ki bu sadece yapay zekânın tahmini ve başarılı bir tahmin olma ihtimali olduğu gibi
                başarısız da olabiliyor.Kupa, yapay zekânın da tahmin ettiği gibi 2-1'lik sonuçla
                İspanya'nın oldu.
            </p>

            <Comments />

        </div>
    )
}

export default Euro