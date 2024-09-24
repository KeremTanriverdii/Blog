import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Comments from '../../../Components/Comments';
import '../../../App.css';

import catDrop from '../../../assets/cats/cat-drop.gif';
import cats from '../../../assets/cats/cats-party.jpg';
import cat2 from '../../../assets/cats/cat2.jpg';
import cat3 from '../../../assets/cats/cats3.jpg';

function Cats() {

    return (
        <Container>
            <Row >
                <Col>
                    <h2>
                        Kediler Neden Her Şeyi Aşağı İter?
                    </h2>
                    <img className='img-fluid' src={cats} alt='Cats Party' />
                    <p>
                        En yakın dostlarımızdan biri olan kediler, bazen bizimle oyun oynar bazen patiler bazen de tüm gün uyurlar. Peki kediler neden gözümüzün içine baka baka sabit duran her nesneyi büyük bir inatla ve umarsızlıkla aşağı doğru iterler?
                    </p>
                    <p>Bir kedi sizin en yakın arkadaşınız olabilir, sizinle oturup bir şeyler içebilir, hüzünlenebilir, yılbaşını kutlayabilir, mutlu olabilir, bazen patileyebilir bazen de yattığı koltuğun altından çıkmaz ve umrunda olmadan uyumaya devam edebilir. Çünkü ruh hali bu! Değişkenlik gösterir.</p>
                    <p>
                        Peki bir kedi neden her şeyi durmadan aşağıya doğru iter? Gözlerinizin içine baka baka, defalarca.. Kedinizi, kendinizi ve eşyalarınızı sağlam ve güvenilir bir yere sabitlediyseniz gelin bu konuya bir göz atıp cevaplar arayalım.
                    </p>
                    <h3 className=''>
                        <svg className='filled-greater-than' viewBox="0 0 100 100">
                            <polygon points="10,10 90,50 10,90" />
                        </svg>
                        Kendilerini evcilleştiren kediler insanlar ile sıkı dost oldular.
                    </h3>
                    <img className='img-fluid' src='https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1'
                    />
                    <p>
                        Kedilerin insanlar ile ilk birlikte yaşamaya başladıkları dönem bundan 9500 yıl öncesine denk gelmektedir. Bu dönemlerde Orta Doğu'da tarım yapmaya başlayan insanlar, tahıl depolarını işgal eden kemirgenlerden muzdaripken vahşi kedileri çöllerden köylere getiren ilk şey de bu oluyor.
                    </p>
                    <p>
                        Bu noktada da bilim insanlarının varsayımlarına göre kediler bu dönemlerde kendilerini evcilleştirdiler ve insanlar ile yakınlaştılar. Peki bu süreçte minik, sevimli dost olarak evlerimizde yer alan kediler içgüdülerini kaybettiler mi?
                    </p>
                    <h3>
                        <svg className='filled-greater-than' viewBox="0 0 100 100">
                            <polygon points="10,10 90,50 10,90" />
                        </svg>
                        Evcilleşen dostlarımız avcı içgüdülerini hiçbir zaman tam olarak kaybetmedi.
                    </h3>
                    <img className='img-fluid' src={catDrop} alt='Droping' />
                    <p>
                        İçgüdülerin birden bire ortadan yok olan veya silinebilen bir özelliği olmaması zaman içerisinde evcilleşsen kedilerin av-avcı içgüdülerini de ortadan kaldırmadı.
                    </p>
                    <p>
                        Kedilerin içgüdüsel olarak av ve avlanma pratiğinden gelmesi -yiyeceklerini avlamak için bir donanıma sahip olmaları gibi- araştırmacıları, kedilerin bir şeyleri devirme davranışlarını bu içgüdünün bir karşılığı olabileceği fikri noktasında birleştirdi. Küçümsemeyin, bir nesne büyük bir düşman olabilir!
                    </p>
                    <h3>
                        <svg className='filled-greater-than' viewBox="0 0 100 100">
                            <polygon points="10,10 90,50 10,90" />
                        </svg>
                        Aynı zamanda test etme, tanıma ve merak içgüdüleri de bu yolda onları yalnız bırakmadı.
                    </h3>
                    <img className='img-fluid' src={cat3} alt='Cats Photo 3' />
                    <p>
                        Bunun yanı sıra Uluslararası Hayvan Davranışı Danışmanları Derneği’nin sertifikalı hayvan davranış danışmanı (CABC) ve kedilerin birçok ilginç davranışları hakkında birkaç kitabın yazarı olan CABC’den Amy Shojai, bu durumu "Kediler nesneleri test etmek ve keşfetmek için patilerini kullanır ve nesnenin hareketi, sesi, dokunuşu veya hissi, neyin güvenli olup olmadığını anlamalarına yardımcı olur" diyerek açıklıyor.
                    </p>
                    <p>
                        Bu açıklamadan hareketle kedilerin belki de sadece o nesneyi tanımak, keşfetmek, kendi alanlarını içgüdüsel olarak korumak  için -belki de şu an arkanızdan yere atılan bir kitap gibi- her şeyi aşağı doğru küçük bir darbeyle iterek alanlarını güvenli bir hale getirmeleri bu davranışın sebeplerinden birini oluşturuyor.
                    </p>
                    <h3>
                        <svg className='filled-greater-than' viewBox="0 0 100 100">
                            <polygon points="10,10 90,50 10,90" />
                        </svg>
                        Ancak tamamen evcilleşen yanları ise bütün ilgiyi de üzerlerinde istemelerine yol açtı.
                    </h3>
                    <img className='img-fluid' src={cat2} alt='Cats Photo 2' />
                    <p>
                        Peki az önce üzerinize devrilen bir kitap ya da tezgahtan yere düşmek üzere olan kahve dolu bardağı görünce siz ne yapıyorsunuz? Muhtemelen büyük bir yakarış ve kedinize doğru dünyanın en kısa  ve hızlı koşusu.. Kediniz amacına ulaştı ve dikkatinizi çekti! Belki bütün gün evde tek başına kalan kediniz en kötü ilgi bile ilgisizlikten iyidir diyerek her şeyi aşağı doğru itmeye başlıyor ve sizden tepki alarak amacına ulaşıyor.
                    </p>
                    <p>
                        Kedilerimizin ilgi isteği sizin gösterdiğiniz tepki yazılı olmayan bir anlaşma gibi aranızda sürüp gidiyor. Araştırmacılar böyle anlarda tepki vermezsek hem kendimizi hem de kedimizi olası kazalardan korumayı başarabileceğimizi öngörüyorlar. Tabii bunun yanı sıra kırılacak veya zarar verecek nesneleri ortada bırakmamak tüm ev halkı için en iyisi olacaktır.
                    </p>

                    <h3>
                        <svg className='filled-greater-than' viewBox="0 0 100 100">
                            <polygon points="10,10 90,50 10,90" />
                        </svg>
                        İlgiyi üzerlerine çekip devam eden kediler, bunu bir eğlenceye çevirip her şeyi aşağı itmeye devam ettiler.
                    </h3>

                    <p>Ya bunların hiçbiri değilse? Araştırmalar, ipten bir topla oynamaktan, patilemekten, koltuktan koltuğa atlamaktan, ayaklarımıza saldırmaktan sıkılan kedilerin küçük bir darbe ile yere düşürdükleri nesnelerin onlar için eğlenceli olabildiğini göstermektedir.</p>

                    <p>
                        Yere düşen nesneler sadece bir kitap ya da parfüm değil aynı zamanda onu yere doğru iten patinin, nesnenin düşüşünü, düşüş hızını, yerde yarattığı etkiyi görmesi ve bunun sonucunda bir davranışı ortaya çıkarmasını sağlamaktadır. Bu davranış bazen nesnenin üzerine gitmek bazen kaçmak bazen de korkmak olabilir. Bu da yazının ilk başında bahsettiğimiz av-avcı durumundan beri süregelen içgüdülerin bir sonucu olarak yeniden karşımıza çıkabilir. Ama her şeyi bir kenara bırakırsak “bir nedeni yok yalnızca eğlendim!” diyebilirler.
                    </p>
                    <p>
                        Kedilerin nesneleri masadan, tezgahtan, dolaptan aşağı doğru itmeleri, av içgüdüsü, çevresini keşfetme isteği, ilgi ve tepki görme isteği ya da sadece eğlence gibi nedenler bu davranışı açıklayabilir. Ancak, ASPCA Evlat Edinme Merkezi'nde kıdemli kedi davranış danışmanı olan Adi Hovav, bu kedi davranışının arkasında keşfedilmemiş ve araştırılması gereken nedenler olabileceğinin altını çiziyor.
                    </p>

                    <ul>
                        <li>Kaynak: <a href='https://www.petmd.com/cat/behavior/why-do-cats-knock-things-over?utm_source=webtekno'> PETMD</a></li>
                    </ul>

                    <Comments />
                </Col>
            </Row>
        </Container>
    )
}

export default Cats