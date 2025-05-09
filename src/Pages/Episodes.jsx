import React from 'react';
import { useEffect } from 'react';

import Navbar from '../Components/General/Navbar';
import MobileNavbar from '../Components/General/MobileNavbar';
import Episode from '../Components/General/Episode';
import Footer from '../Components/General/Footer';
import Bottom from '../Components/General/Bottom';
import { Link } from 'react-router-dom';
import Title from '../Components/General/Title';
import PodcastApp from '../Components/General/PodcastApp';


// Icons
import YouTube from '../Images/Applications/youtube.png'
import Spotify from '../Images/Applications/spotify.png'
import Apple from '../Images/Applications/itunes.png'
import Deezer from '../Images/Applications/deezer.jpg'

// Episodes
import TeodoraMiljkovic from '../Images/episodes/teodora_miljkovic.webp';
import IvanaJovanovic from '../Images/episodes/ivana_jovanovic.jpg';
import HollyZardus from '../Images/episodes/holly_zardus.webp';
import DejanManojlovic from '../Images/episodes/dejan_manojlovic.jpg';
import FilipUzelac from '../Images/episodes/filip_uzelac.webp';
import StojanVukovic from '../Images/episodes/stojan_vukovic.webp';
import LazarZivic from '../Images/episodes/lazar_zivic.jpg';
import AleksaJovanovic from '../Images/episodes/aleksa_jovanovic.jpg';
import MinaJovic from '../Images/episodes/mina_jovic.jpg';
import StevanJovanovic from '../Images/episodes/stevan_jovanovic.jpg';
import IvanRadojevic from '../Images/episodes/ivan_radojevic.webp';
import CharlesCather from '../Images/episodes/charles_cather.jpg';
import NenadMilojevic from '../Images/episodes/nenad_milojevic.jpg';
import AndjelikaNikolic from '../Images/episodes/andjelika_nikolic.jpg';
import SrdanVlahovic from '../Images/episodes/srdan_vlahovic.webp';
import BojanVignjevic from '../Images/episodes/bojan_vignjevic.jpg';
import MilosKrmar from '../Images/episodes/milos_krmar.jpg';
import DusanStricevic from '../Images/episodes/dusan_stricevic.jpg';
import MarijaRaicevic from '../Images/episodes/marija_raicevic.webp';
import StefanDraskovic from '../Images/episodes/stefan_draskovic.webp';
import NikolaCobanov from '../Images/episodes/nikola_cobanov.webp';
import NemanjaAntic from '../Images/episodes/nemanja_antic.webp';
import AleksaOgnjenovic from '../Images/episodes/aleksa_ognjenovic.jpg';
import NenadMlinarevic from '../Images/episodes/nenad_mlinarevic.webp';
import MilicaDangubic from '../Images/episodes/milica_dangubic.png';
import DraganaOborina from '../Images/episodes/dragana_oborina.jpg';
import VladimirDjukanovic from '../Images/episodes/vladimir_djukanovic.jpg';
import MilosDobrota from '../Images/episodes/milos_dobrota.jpg';
import MarijaEgic from '../Images/episodes/marija_egic.jpg';
import SanjaSimunovic from '../Images/episodes/sanja_simunovic.jpg'
import MilosTodosijevic from '../Images/episodes/milos_todosijevic.jpg'
import MihajloPantic from '../Images/episodes/mihajlo_pantic.jpg'
import BojanaCoso from '../Images/episodes/bojana_coso.jpg'
import ZlatijaRakic from '../Images/episodes/zlatija_rakic.webp'
import JelenaBrajevic from '../Images/episodes/jelena_brajevic.jpg'
import DraganaTrifunovic from '../Images/episodes/dragana_trifunovic.webp'
import MilaMejic from '../Images/episodes/mila_mejic.jpg'
import AleksandarStamenkovic from '../Images/episodes/aleksandar_stamenkovic.jpg'
import MionaIlic from '../Images/episodes/miona_ilic.webp'
import AtilaFeher from '../Images/episodes/atila_feher.webp'
import TatjanaNikolic from '../Images/episodes/tatjana_nikolic.webp'
import NikolaUcur from '../Images/episodes/nikola_ucur.webp'
import MilanIlic from '../Images/episodes/milan_ilic.webp'
import MatijaGrujic from '../Images/episodes/matija_grujic.webp'
import AndjelaNestorovic from '../Images/episodes/andjela_nestorovic.webp'

// ANIMATION ON SCROLL
import AOS from 'aos'
import 'aos/dist/aos.css'

const Episodes = () => {
  useEffect(() => {
    document.title = "Sve epizode";
    AOS.init({ duration: 400 });
  })

  return (
    <>
      <Navbar />
      <MobileNavbar />

      <div class="wrapper-episodes">
        {/* <Episode img={} header=""
          link="" /> */}

        * <Episode img={AndjelaNestorovic} header="EP 45 | Work & Travel: Sunce, posao i dva nezaboravna leta na Cape Codu | Anđela Nestorović"
          link="https://www.youtube.com/watch?v=oeoqtaF6Yyg" /> *

        * <Episode img={MatijaGrujic} header="EP 44 | Work and Travel: Od Aljaske do Jute - Američki san sa dva lica | Matija Grujić"
          link="https://www.youtube.com/watch?v=jyYQ_TCST9U" /> *

        <Episode img={MilanIlic} header="EP 43 | Work & Travel Aljaska: Letnja Američka avantura na kraju sveta | Milan Ilić"
          link="https://www.youtube.com/watch?v=7aX4tXjqZd4" />

        <Episode img={NikolaUcur} header="EP 42 | Work and Travel: Od sezonskih radnika do fudbalskih šampiona Block Islanda | Nikola Učur"
          link="https://www.youtube.com/watch?v=pZSuKLBrJQ8" />

        <Episode img={TatjanaNikolic} header="EP 41 | 11 godina u Americi: Od AU Pair-a do američkog pasoša - i nazad u Srbiju | Tanja Nikolić"
          link="https://www.youtube.com/watch?v=uudr_vfD6H8" />

        <Episode img={AtilaFeher} header="EP 40 | Leto koje menja život: Work & Travel na Martinim Vinogradima | Atila Feher"
          link="https://www.youtube.com/watch?v=NtmyVEcCKlo" />

        <Episode img={MionaIlic} header="EP 39 | Sunce, plaža i društvo: Nezaboravno leto u Americi | Miona Ilić"
          link="https://www.youtube.com/watch?v=KPjHe4sHjs8" />

        <Episode img={AleksandarStamenkovic} header="EP 38 | Od Niša do New Yorka: Američki san personalnog trenera | Aleksandar Stamenković"
          link="https://www.youtube.com/watch?v=F24pYA4MIA0" />

        <Episode img={MilaMejic} header="EP 37 | Živim svoj Američki san i ne bih ga menjala ni za šta | Mila Mejić"
          link="https://www.youtube.com/watch?v=rn5EVK28W94" />

        <Episode img={DraganaTrifunovic} header="EP 36 | Work and Travel: Od mirnog Cape Coda do uragana u Majamiju | Dragana Trifunović"
          link="https://www.youtube.com/watch?v=zMqH_r3s4MY" />

        <Episode img={JelenaBrajevic} header="EP 35 | Au Pair USA: Kako sam preživela i zavolela Pittsburgh i Salt Lake City | Jelena Brajević"
          link="https://www.youtube.com/watch?v=rMyUCZjcJiY" />

        <Episode img={ZlatijaRakic} header="EP 34 | Work & Travel Iskustvo koje iz Amerike doneseš kući nema cenu | Zlatija Rakić"
          link="https://www.youtube.com/watch?v=wMOLHrXKa0s" />

        <Episode img={BojanaCoso} header="EP 33 | Letnja avantura: Od rada na Block Islandu do čarolije Njujorka | Bojana Ćoso"
          link="https://www.youtube.com/watch?v=EKnlg48ugOs" />

        <Episode img={MihajloPantic} header="EP 32 | Od Istočne do Zapadne obale: Work and Travel odiseja kroz SAD | Mihajlo Pantić"
          link="https://www.youtube.com/watch?v=_6oXf8TWCI8" />

        <Episode img={MilosTodosijevic} header="EP 31 | Američki San: Školovanje u SAD-u od Srednje Škole do Koledža | Miloš Todosijević"
          link="https://www.youtube.com/watch?v=d9kFGBmTbfY" />

        <Episode img={SanjaSimunovic} header="EP 30 | Na Nantucketu ima više milijardera nego milionera | Sanja Simunović"
          link="https://www.youtube.com/watch?v=8QXByI0e7x0" />

        <Episode img={TeodoraMiljkovic} header="EP 29 | Na koje je sve načine Srbija povezana sa svetom | Teodora Miljković"
          link="https://www.youtube.com/watch?v=OcALydliEpo" />

        <Episode img={IvanaJovanovic} header="EP 28 | Kako sam otišla u Ameriku da razvijam svoju projektnu ideju | Ivana Jovanović"
          link="https://www.youtube.com/watch?v=vbx4ijLXbDM" />

        <Episode img={HollyZardus} header="EP 27 | Kako je nastao i razvijao se program Balkanski Omladinski Lideri | Holly Zardus"
          link="https://www.youtube.com/watch?v=xvlKAOlGDgg" />

        <Episode img={DejanManojlovic} header="EP 26 | Prijateljstva stečena na Work and Travel programu ostaju za ceo život | Dejan Manojlović"
          link="https://www.youtube.com/watch?v=0YuVSFEansE" />

        <Episode img={FilipUzelac} header="EP 25 | Do juče sam bio student a sad već dva auta i stan kao pravi Amerikanac | Filip Uzelac"
          link="https://www.youtube.com/watch?v=Gt_fbJbncJU" />

        <Episode img={StojanVukovic} header="EP 24 | U Americi ako te vide da se trudiš odmah te unapređuju | Stojan Vuković"
          link="https://www.youtube.com/watch?v=JUXOlOXg-YI" />

        <Episode img={LazarZivic} header="EP 23 | Američki san: Od zvezde u Majamiju do Deportacije | Lazar Živić"
          link="https://www.youtube.com/watch?v=dLz6y6naKSI" />

        <Episode img={AleksaJovanovic} header="EP 22 | Od Života sa ljudima iz GETA do uspeha u Online Biznisu | Aleksa Jovanović"
          link="https://www.youtube.com/watch?v=p17TAAWRmD0" />

        <Episode img={MinaJovic} header="EP 21 | Work and Travel USA je kao mali život u životu | Mina Jović"
          link="https://www.youtube.com/watch?v=fzzJbYs7Jgo" />

        <Episode img={StevanJovanovic} header="EP 20 | Život bivšeg NCAA košarkaša na koledžu u Severnoj Dakoti | Stevan Jovanović"
          link="https://www.youtube.com/watch?v=ZeGUAybSNKs" />

        <Episode img={IvanRadojevic} header="EP 19 | Američki san od Bostona do Kolorada i nazad | Ivan Radojević"
          link="https://www.youtube.com/watch?v=7FMTIjR17m8" />

        <Episode img={CharlesCather} header="EP 18 | Srbija je prelepa zemlja sa veoma ljubaznim i gostoljubivim ljudima | Charles Cather"
          link="https://www.youtube.com/watch?v=jGxBAtzFhEA" />

        <Episode img={NenadMilojevic} header="EP 17 | Amerika je zemlja mogućnosti i može da ti promeni život | Nenad Milojević"
          link="https://www.youtube.com/watch?v=bHUJzu6u0Fc" />

        <Episode img={AndjelikaNikolic} header="EP 16 | Na zapadnoj obali su ljudi opušteniji a na istočnoj obali su formalniji | Anđelika Nikolić"
          link="https://www.youtube.com/watch?v=pJibdPBW08A" />

        <Episode img={SrdanVlahovic} header="EP 15 | Kako sam proveo besplatno mesec dana u Americi kao srednjoškolac (BFTF) | Srdan Vlahović"
          link="https://www.youtube.com/watch?v=P5-83v4kkRc" />

        <Episode img={BojanVignjevic} header="EP 14 | U Americi vozač kamiona zaradi 4 puta više nego u Evropi | Bojan Vignjević"
          link="https://www.youtube.com/watch?v=081E5vT50zc" />

        <Episode img={MilosKrmar} header="EP 13 | Kako sam ostvario svoj cilj putujući kroz Ameriku | Miloš Krmar"
          link="https://www.youtube.com/watch?v=swApRoVK0yc" />

        <Episode img={DusanStricevic} header="EP 12 | Dobio sam stipendiju za fakultet u Alabami a završio u Nebraski | Dušan Stričević"
          link="https://www.youtube.com/watch?v=DnlrVCqUqcA" />

        <Episode img={MarijaRaicevic} header="EP 11 | Kako sam sa 16 godina kao srednjoškolka otišla u Ameriku besplatno | Marija Raičević"
          link="https://www.youtube.com/watch?v=TQCInzd0WZg" />

        <Episode img={StefanDraskovic} header="EP 10 | Amerika ima plan da osvoji svetsko prvenstvo u fudbalu 2026 | Stefan Drašković"
          link="https://www.youtube.com/watch?v=Lx63MDi2oWY" />

        <Episode img={NikolaCobanov} header="EP 9 | Kako sam završio na ulici sa dva kofera u Americi | Nikola Čobanov"
          link="https://www.youtube.com/watch?v=fZ5bSu40lc8" />

        <Episode img={NemanjaAntic} header="EP 8 | Kada će propasti Američka berza i zašto nikad? | Nemanja Antić"
          link="https://www.youtube.com/watch?v=6HlapmPX9m4" />

        <Episode img={AleksaOgnjenovic} header="EP 7 | U Americi tvoj uspeh zavisi isključivo od tebe | Aleksa Ognjenović"
          link="https://www.youtube.com/watch?v=OfVDibE3S7Q" />

        <Episode img={NenadMlinarevic} header="EP 6 | Kako sam dobio posao u Mercedesu u Americi | Nenad Mlinarević"
          link="https://www.youtube.com/watch?v=mLNTFtJ3480" />

        <Episode img={MilicaDangubic} header="EP 5 | Kako izgleda bračni život u kamionu | Milica Dangubić"
          link="https://www.youtube.com/watch?v=JL1KpDiG8yk" />

        <Episode img={DraganaOborina} header="EP 4 | Sa 29 godina sam upisala master studije u Americi | Dragana Oborina"
          link="https://www.youtube.com/watch?v=QnlkN0V-434" />

        <Episode img={VladimirDjukanovic} header="EP 3 | Srpski vuk sa Wall Street-a | Vladimir Đukanović"
          link="https://www.youtube.com/watch?v=Tah6sovMYxs" />

        <Episode img={MilosDobrota} header="EP 2 | Dobio sam zelenu kartu na lutriji i zapalio na Floridu | Miloš Dobrota"
          link="https://www.youtube.com/watch?v=VZf4ulGoHAw" />

        <Episode img={MarijaEgic} header="EP 1 | Kako sam preko odbojke otišla na studije u Ameriku | Marija Egić"
          link="https://www.youtube.com/watch?v=S9my-W0ZYUg&t=3443s" />
      </div>

      <div className="blue-section">
        <Title title="Slušaj podkast" />

        <div class="wrapper-applications">
          <Link to="https://www.youtube.com/@mojaamerika" target='_blank' rel="noreferrer">
            <PodcastApp appimg={YouTube} appname="YouTube" appalt="YouTube logo" />
          </Link>

          <Link to="https://open.spotify.com/show/2EkisQ7V0Ra6EzQGUMv4Nf?si=cbb1d9d403bb4b0b" target='_blank' rel="noreferrer">
            <PodcastApp appimg={Spotify} appname="Spotify" appalt="Spotify logo" />
          </Link>

          <Link to="https://podcasts.apple.com/us/podcast/moja-amerika-podcast/id1652243313" target='_blank' rel="noreferrer">
            <PodcastApp appimg={Apple} appname="iTunes" appalt="Apple Podcast logo" />
          </Link>

          <Link to="https://www.deezer.com/en/show/5321727" target='_blank' rel="noreferrer">
            <PodcastApp appimg={Deezer} appname="Deezer" appalt="Deezer logo" />
          </Link>

        </div>
      </div>


      <Footer />
      <Bottom />
    </>
  )
}

export default Episodes