import React from 'react'
import toys from '../../assets/Ai/sora/toysrus.jpg';
import Comments from '../../Components/Comments';

function Sora() {
    return (
        <div>
            <h3 className='mb-5'>OpenAI'ın Sora Aracıyla Yapılan İlk Reklam Yayımlandı</h3>

            <img className='img-fluid' src={toys} />
            <p>
                Dünyaca ünlü oyuncak mağazası zinciri Toys R Us, OpenAI'ın Sora aracıyla oluşturduğu
                reklamı yayımladı.
            </p>

            <p>
                Yapay zekâ teknolojilerini artık pazarlama faaliyetlerinde daha sık görüyoruz ve gelecekte
                de daha fazla göreceğiz. OpenAI'ın henüz kamuya açık olmayan video oluşturma aracı Sora ile
                üretilen ilk reklam da bu açıdan önemli bir değişiklik olarak karşımıza çıkıyor.
            </p>

            <p>
                Native Foreign adlı reklam ajansı tarafından geliştirilen reklamda firmanın kurucusu Charles
                Lazarus'un Toys R Us'ı kuruş hikâyesini anlattı. Reklamda yapay zekâ ile genç Lazarus'u ve
                markanın maskotu olan Zürafa Geoffrey'i görüyoruz.
            </p>

            <p>
                Sora'ya erişim hâlâ kamuya kapalı ve firma, "kırmızı-takım" çalışmaları yapmaya devam ettiklerini
                belirtiyor. Bu özelliğin kamuya açılmadan önce olası açıkları incelenecek ve geri bildirimler
                yapılacak.

                OpenAI, daha önce de metinden video oluşturma aracını film yapımcılarının karşısına çıkarmıştı. 2024 Tribeca Film Festivali'nde de sadece Sora ile üretilmiş olan kısa filmler yayımlanmıştı.
            </p>

            < source width={560} height={315}
                src="https://www.youtube.com/embed/F_WfIzYGlg4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

            <Comments />

        </div>
    )
}

export default Sora