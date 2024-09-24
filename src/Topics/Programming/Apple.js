import React from 'react'
import ceo from '../../assets/Programming/apple/tim-cook.jpg'
import Comments from '../../Components/Comments'

function apple() {
    return (
        <div>
            <h3 className='mb-5'>
                Apple'ın CEO'su, Yapay Zekânın iPhone'lara Ne Zaman Geleceğini Açıkladı
            </h3>

            <p >
                CEO, bu yılın sonlarında, yapay zekâ özellikleriyle kullanıcıların buluşacağını söyledi.
                iOS 18, Apple için bir devrim olacak gibi görünüyor.
            </p>

            <p className='mt-3'>
                Analistler, üretken yapay zekâ teknolojilerinin iOS 18 ile iPhone'lara geleceğine inanıyorlar.
                Şimdiyse bu düşünceyi doğrulayan bir gelişme yaşandı.Tim Cook, 2023'ün son çeyreğine
                ilişkin mali durum rapor toplantısı sırasında, iOS 18 ile ilgili bazı açıklamalarda bulundu. Cook,
                doğrudan iOS 18 demedi ancak yapılan açıklamalar, Apple'ın üretken yapay zekâ teknolojilerinin bu
                işletim sistemiyle kullanıma sunulacağını gözler önüne seriyor.
            </p>

            <h3 className=''>
                <svg className='filled-greater-than' viewBox="0 0 100 100">
                    <polygon points="10,10 90,50 10,90" />
                </svg>
                CEO Tim Cook'un açıklaması:
            </h3>
            <img className='img-fluid w-100' src={ceo} />
            <p>
                "İleriye baktığımızda geleceği şekillendirecek diğer teknolojilere yatırım yapmaya devam edeceğiz.
                Buna, muazzam miktarda zaman ve çaba harcamaya devam ettiğimiz yapay zekâ da dahildir ve bu alanda
                devam eden çalışmalarımızın ayrıntılarını, bu yılın sonlarında paylaşacağımız için heyecanlıyız."
            </p>
            <p className='mt-5'>
                detaylı bilgi sağlanmadı. iOS 18'in de tanıtılacağı WWDC 2024 etkinlikleri, dünya çapında her zaman
                olduğundan daha fazla ilgi görecek gibi duruyor.
            </p>

            <Comments />
        </div>
    )
}

export default apple