<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('spa-tc-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>¿CÓMO USTED  PUEDE AYUDAR  A CUMPLIR  LA GRAN  COMISIÓN?</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
    <button id="MC2/spa/audio/tc/CT 7.mp3" type="button" class="external-audio">
        Escuchar &nbsp;"&iquest;C&Oacute;MO USTED PUEDE AYUDAR A CUMPLIR LA GRAN COMISI&Oacute;N?"&nbsp;</button>
        <div class="collapsed"></div>
    

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ EL MAYOR RETO</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p>Deseo presentarle el mayor reto que se le haya hecho a hombre alguno, de parte de la persona m&aacute;s extraordinaria que ha vivido. No importa cu&aacute;n rico, cu&aacute;n famoso, cu&aacute;n brillante o cu&aacute;n poderoso sea usted, ninguna causa a la que se entregue se puede comparar con este llamado de Dios, que cambia vidas, e inclusive cambia al mundo.</p>

<p>No importa cu&aacute;ntos honores, premios y logros haya alcanzado, nada puede siquiera compararse con este mandato de nuestro Se&ntilde;or Jesucristo, de ayudar a llevar Su mensaje de amor y perd&oacute;n a toda persona en toda comunidad, en todo pa&iacute;s del mundo, y hacer disc&iacute;pulos en todas las naciones.</p>

<p>Hoy vivimos en un mundo de cambios r&aacute;pidos y radicales. Los corazones de los hombres est&aacute;n llenos de temor y angustia, frustraci&oacute;n y desesperaci&oacute;n. El g&eacute;nero humano ha demostrado ser incapaz de enfrentarse con los serios problemas de nuestro tiempo, la explosi&oacute;n demogr&aacute;fica, la contaminaci&oacute;n ambiental, los altos &iacute;ndices de crimen y violencia, la rebeli&oacute;n sexual, el alcoholismo, la adicci&oacute;n a las drogas, el aborto, al pornograf&iacute;a, la excesiva urbanizaci&oacute;n, y la decadencia pol&iacute;tica, social y moral.</p>

<p>&iexcl;Qu&eacute; buen momento para que los cristianos participen en la m&aacute;s grande cosecha espiritual desde el Pentecost&eacute;s! Esta hora oscura y desesperada para los asuntos del g&eacute;nero humano, es una hora de destino, un tiempo de oportunidades sin precedente para los cristianos. Esta es la hora para la cual nacimos, para poner en marcha una revoluci&oacute;n espiritual poderosa y arrolladora que cambie el curso de la historia, y le revele al g&eacute;nero humano que el Evangelio glorioso de nuestro Se&ntilde;or Jesucristo, ofrece las soluciones b&aacute;sicas para todos los problemas que enfrenta la humanidad.</p>

<p>Si esta declaraci&oacute;n suena simplista o melodram&aacute;tica, haga una prueba, s&oacute;lo aplique los Diez Mandamientos, la Regla de Oro y otras ense&ntilde;anzas de Jes&uacute;s, como por ejemplo Su mandato de amar a Dios con todo su coraz&oacute;n, con toda su alma y con toda su mente, y a su pr&oacute;jimo como a s&iacute; mismo (aun a sus enemigos) a cada uno de estos problemas y observe c&oacute;mo se evaporan ante sus ojos.</p>

<p>Si tuviera el privilegio de escribir una noticia sobre los m&aacute;s grandes eventos de todos los siglos, uno de los m&aacute;s importantes ser&iacute;a una reuni&oacute;n en una monta&ntilde;a cerca de Galilea, donde un peque&ntilde;o grupo de hombres recibieron una estrategia global para llevar el amor y el perd&oacute;n de Dios a un mundo perdido y moribundo. En esa monta&ntilde;a, esos hombres recibieron el desaf&iacute;o m&aacute;s grande que se haya dado al g&eacute;nero humano, y al cual me refiero, de parte de la persona m&aacute;s maravillosa que ha vivido, concerniente al poder m&aacute;s grande que se haya revelado y a la mayor promesa que se ha conocido. Me refiero, por supuesto, a la Gran Comisi&oacute;n de nuestro Se&ntilde;or Jesucristo, que &Eacute;l dio a&nbsp;sus disc&iacute;pulos y, a trav&eacute;s de ellos, a todos nosotros. El dijo:</p>

<div class="quote-left">Toda potestad me es dada en el cielo y en la tierra. Por tanto, id, y haced disc&iacute;pulos a todas las naciones,&nbsp;bautiz&aacute;ndolos en el nombre del Padre, y del Hijo, y del Esp&iacute;ritu Santo; ense&ntilde;&aacute;ndoles que guarden todas las cosas que os he mandado, y he aqu&iacute; yo estoy con vosotros todos los d&iacute;as, hasta &laquo; el fin del mundo&rdquo;.</div>

<p>Luego, en el Monte de los Olivos, nuestro Se&ntilde;or dio Su palabra final a Sus disc&iacute;pulos y a nosotros, antes de ascender al Padre. &Eacute;l dijo:</p>

<div class="quote-right">Pero recibir&eacute;is poder, cuando haya venido sobre vosotros el Esp&iacute;ritu Santo, y me ser&eacute;is testigos en Jerusal&eacute;n, en toda Judea, en Samaria, y hasta lo &uacute;ltimo de la tierra.</div>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/TC7-1.png" style="width:100%" /></p>

<p>Si estos encuentros no se hubieran llevado a cabo y no se hubiera dado el mandato y la promesa de nuestro Se&ntilde;or, usted no estar&iacute;a experimentando ahora el amor, el perd&oacute;n, el gozo y el prop&oacute;sito de la gracia incomparable de Dios, disponible a todos los que creen en Cristo. En realidad, yo no estar&iacute;a escribiendo este mensaje.</p>

</div>

<p>&nbsp;</p>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ UNA VISI&Oacute;N POR EL MUNDO</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p>La Gran Comisi&oacute;n siempre ha sido el enfoque de mi vida desde aquel momento a medianoche, en la primavera de 1951, en que Dios me habl&oacute; de una forma soberana, &uacute;nica y sobrenatural, en relaci&oacute;n a mi rol para ayudar a cumplir Su mandato. La visi&oacute;n abarc&oacute; al mundo entero y result&oacute; en el ministerio de la Cruzada Estudiantil y Profesional para Cristo.</p>

<p>Desde ese tiempo hemos crecido de dos coordinadores, que &eacute;ramos mi esposa Vonette y yo, en la universidad de UCLA en California, a m&aacute;s de veinte mil coordinadores de tiempo completo, asociados y voluntarios, sirviendo a nuestro Se&ntilde;or en los 193 pa&iacute;ses m&aacute;s importantes, representando 97% de la poblaci&oacute;n mundial.</p>

<p>Decenas de millones de personas han recibido a Cristo como su Salvador y Se&ntilde;or por medio de este ministerio, y millones de &eacute;stas han sido discipuladas para ganar y discipular a otros, generaci&oacute;n espiritual tras generaci&oacute;n.</p>

<p>Por mi parte, trato de evaluar todo lo que hago cada d&iacute;a a la luz de c&oacute;mo esto contribuir&aacute; al cumplimiento de la Gran Comisi&oacute;n. Algunas veces me pregunto, &ldquo;&iquest;Est&aacute;s sorprendido del crecimiento y el &eacute;xito impresionante de la Cruzada Estudiantil y Profesional para Cristo?&rdquo; Mi respuesta es &ldquo;No&rdquo;, porque seg&uacute;n la visi&oacute;n original que Dios me dio en 1951, apenas hemos comenzado a ver lo que Dios va a hacer.</p>

<p>&iexcl;Todav&iacute;a no hemos visto lo mejor!</p>

<p>Me siento verdaderamente empeque&ntilde;ecido y profundamente agradecido por el privilegio de servir en este ministerio. Sin embargo, no estoy sorprendido al ver los milagros de la gracia de Dios, durante las &uacute;ltimas cuatro d&eacute;cadas, a la luz de la visi&oacute;n dram&aacute;tica que Dios me dio del mundo, y lo que va a pasar respecto de la cosecha espiritual.</p>

<p>La Gran Comisi&oacute;n dada por nuestro Se&ntilde;or es para todo creyente, no s&oacute;lo para los coordinadores de la Cruzada Estudiantil y Profesional para Cristo, y para unos cuantos misioneros y pastores que aman a nuestro Se&ntilde;or. El mandato de ayudar a alcanzar el mundo para Cristo es para todo creyente. Cada uno de nosotros tiene un importante papel que jugar, dado por Dios, en ayudar a cumplir esta Gran Comisi&oacute;n.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ UNA ESTRATEGIA GLOBAL</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/TC7-2.png" style="float:right; width:50%" />En una de mis primeras clases de periodismo, aprend&iacute; que el primer p&aacute;rrafo denominado &ldquo;encabezado&rdquo;, en una buena noticia, usualmente responde a seis preguntas b&aacute;sicas: Qui&eacute;n, Qu&eacute;, Por qu&eacute;, D&oacute;nde, Cu&aacute;ndo, y C&oacute;mo.</p>

<p>En este libro, quiero compartirle una estrategia positiva y pr&aacute;ctica que responde a estas seis preguntas b&aacute;sicas.</p>

<h3>&iquest;Qui&eacute;n dio la Gran Comisi&oacute;n y a qui&eacute;nes les fue dada?</h3>

<p>&iquest;S&oacute;lo nuestro Se&ntilde;or Jesucristo podr&iacute;a decir, &laquo;Toda potestad me es dada en el cielo y en la tierra?&raquo; Jes&uacute;s es el &uacute;nico Hijo de Dios. Su nacimiento milagroso, su muerte sustitutoria y su resurrecci&oacute;n corporal son los eventos m&aacute;s importantes de la historia humana. Dios se hizo hombre. &Eacute;l muri&oacute; en la cruz y se levant&oacute; de entre los muertos, para salvar a las personas del pecado y para dar vida eterna a todos los que le reciben. El resultado fue una revoluci&oacute;n espiritual que cambi&oacute; al mundo del primer siglo, y alter&oacute; dram&aacute;ticamente el curso de la historia.</p>

<p>Jes&uacute;s de Nazaret, la persona m&aacute;s revolucionaria que ha vivido, produjo los m&aacute;s grandes beneficios de toda la historia del g&eacute;nero humano, transformando las vidas de cientos de millones de hombres y mujeres. El historiador Phillip Schaff dijo, &ldquo;Jes&uacute;s de Nazaret, sin armas y sin dinero, conquist&oacute; a muchos m&aacute;s millones que Alejandro, C&eacute;sar, Mahoma y Napole&oacute;n. Sin ciencia ni educaci&oacute;n formal, &Eacute;l arroj&oacute; m&aacute;s luz sobre los asuntos humanos y divinos que todos los fil&oacute;sofos y eruditos puestos juntos.</p>

<p>Sin la elocuencia acad&eacute;mica, &Eacute;l habl&oacute; palabras de vida como nunca antes se hab&iacute;an pronunciado, y produjo resultados que van m&aacute;s all&aacute; del alcance de cualquier orador o poeta. Sin escribir ni una l&iacute;nea, El ha puesto m&aacute;s plumas en movimiento y ha inspirado m&aacute;s temas para sermones, discusiones, obras de arte, enciclopedias, y las m&aacute;s dulces canciones de alabanza, que toda la multitud de grandes hombres de los tiempos modernos y antiguos puestos juntos. Nacido en un pesebre y crucificado como un malhechor, &Eacute;l controla hoy el destino del mundo civilizado y rige un imperio que abarca la tercera parte de los habitantes del mundo.&rdquo;</p>

<p>Jesucristo cambia a los hombres, a las mujeres, y a las naciones. Dondequiera que llega su mensaje, las vidas son transformadas. El gran estadista misionero Dr. Samuel Zwemer dijo acerca de nuestro Salvador, &ldquo;El Evangelio no s&oacute;lo convierte a los individuos, sino que cambia la sociedad. En todo campo misionero, desde los d&iacute;as de William Carey, los misioneros han realizado un verdadero Evangelio social. Estos establecieron normas de limpieza e higiene, promovieron la industria, elevaron la condici&oacute;n de la mujer, restringieron las costumbres antisociales, abolieron el canibalismo, la crueldad y los sacrificios humanos, organizaron la ayuda contra el hambre, detuvieron las guerras tribales y cambiaron la estructura de la sociedad.&rdquo; Pablo escribe a los Colosenses:</p>

<div class="quote-left">&Eacute;l&nbsp;es la imagen del Dios invisible, el primog&eacute;nito de toda creaci&oacute;n. Porque en &eacute;l fueron creadas todas las cosas, las que hay en los cielos y las que hay en la tierra ... en quien est&aacute;n escondidos todos los tesoros de la sabidur&iacute;a y del conocimiento ... porque en &eacute;l habita corporalmente toda la plenitud de la Deidad, y vosotros est&aacute;is completos en &eacute;l, que es la cabeza de todo principado y potestad.</div>

<p>Cuando usted representa al Se&ntilde;or Jes&uacute;s siendo su disc&iacute;pulo, puede estar seguro que est&aacute; representado a la Persona que posee todo poder, sabidur&iacute;a y autoridad.</p>

<p>Usted lo tiene todo por cuanto lo tiene a &Eacute;l. Jes&uacute;s dijo:</p>

<div class="quote-left">De cierto, de cierto os digo: El que en m&iacute; cree, las obras que yo hago, &eacute;l las har&aacute; tambi&eacute;n; y aun mayores har&aacute;, porque yo &laquo;voy al Padre.</div>

<p>Ning&uacute;n poder puede resistirse cuando usted act&uacute;a en obediencia y fe como Su embajador. Usted tiene la promesa, &ldquo;mayor es el que est&aacute; en vosotros que el que est&aacute; en el mundo&rdquo;. Tambi&eacute;n, tiene la seguridad de que las puertas del infierno no prevalecer&aacute;n contra usted. Cuanto m&aacute;s comprenda qui&eacute;n es Jesucristo y todo lo que &Eacute;l ha hecho y har&aacute; en y a trav&eacute;s de usted, m&aacute;s querr&aacute; confiar en &Eacute;l, obedecerle y servirle completamente.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/TC7-3.png" style="float:right; width:50%" />&iquest;A quienes dio Cristo la Gran Comisi&oacute;n? Jes&uacute;s dio la Gran Comisi&oacute;n no s&oacute;lo a Sus once disc&iacute;pulos, sino a todos aquellos que han cre&iacute;do en &Eacute;l a trav&eacute;s de los siglos. Por lo tanto, todo cristiano deber&iacute;a involucrarse din&aacute;mica y continuamente en ayudar a cumplir la Gran Comisi&oacute;n como manera de vivir, a trav&eacute;s de la utilizaci&oacute;n de sus vidas, talento y finanzas.</p>

<p>Poco despu&eacute;s que Jes&uacute;s dio la Gran Comisi&oacute;n, Dios el Esp&iacute;ritu Santo, en el d&iacute;a de Pentecost&eacute;s, transform&oacute; y capacit&oacute; la vida de los mismos disc&iacute;pulos quienes, durante Su pasi&oacute;n y crucifixi&oacute;n, hab&iacute;an negado a nuestro Se&ntilde;or y la mayor parte lo hab&iacute;an abandonado. Despu&eacute;s del Pentecost&eacute;s, salieron con valent&iacute;a y audacia, dispuestos a arriesgar sus vidas por la proclamaci&oacute;n del mensaje de amor y perd&oacute;n de Dios en Cristo. En efecto, todos los disc&iacute;pulos murieron como m&aacute;rtires predicando el Evangelio, excepto Juan, quien muri&oacute; en el exilio en la Isla de Patmos, despu&eacute;s que sobrevivi&oacute; a ser quemado en un caldero de aceite por raz&oacute;n de su fe.</p>

<p>Por alguna extra&ntilde;a raz&oacute;n tenemos la idea que los primeros cristianos eran diferentes de nosotros, que ellos pose&iacute;an una calidad de vida a la cual no podemos aspirar. Sin embargo es un hecho hist&oacute;rico que las personas a las que Dios dio Su Gran Comisi&oacute;n eran individuos comunes y corrientes, trabajadores normales, plagados de las mismas debilidades que nosotros. La &uacute;nica diferencia entre la mayor&iacute;a de ellos y la mayor&iacute;a de nosotros radica en dos cosas:</p>

<p><strong>Primero;</strong> ten&iacute;an plena confianza en un Se&ntilde;or resucitado, triunfante sobre la muerte. Aquel que vivi&oacute; entre ellos y que volver&aacute; otra vez para reinar en la tierra</p>

<p><strong>Segundo; </strong>estaban llenos del Esp&iacute;ritu Santo. En la actualidad, si hubiera suficientes cristianos totalmente comprometidos con el Se&ntilde;or resucitado, que est&aacute; pronto a volver y fueran controlados y dirigidos por el Esp&iacute;ritu Santo, nosotros cambiar&iacute;amos nuestro mundo y experimentar&iacute;amos una poderosa revoluci&oacute;n espiritual como aquella del primer siglo.</p>

<h3>&iquest;Qu&eacute; es la Gran Comisi&oacute;n?</h3>

<p>La Gran Comisi&oacute;n es el mandato de nuestro Se&ntilde;or Jesucristo de llevar el Evangelio a toda persona a trav&eacute;s del mundo y hacer disc&iacute;pulos de todas las naciones. Involucra edificar y multiplicar disc&iacute;pulos de todas las naciones, para que &eacute;stos puedan, a su vez, saturar sus naciones con las Buenas Nuevas, y capacitar a otros disc&iacute;pulos para hacer lo mismo, generaci&oacute;n espiritual tras generaci&oacute;n espiritual, por medio de un proceso de multiplicaci&oacute;n espiritual.</p>

<p>Cristo no nos mand&oacute; a cristianizar a todas las naciones; &Eacute;l nos llam&oacute; a evangelizarlas y discipularlas. Nuestra responsabilidad es predicar y ense&ntilde;ar el Evangelio vivo de Cristo; la responsabilidad del Esp&iacute;ritu Santo es hacernos testigos efectivos. Con la responsabilidad, sin embargo, Cristo tambi&eacute;n nos dio todo lo necesario para tener &eacute;xito.</p>

<h3>&iquest;Por qu&eacute; usted debe ayudar a cumplir la Gran Comisi&oacute;n?</h3>

<p>Hay por lo menos cuatro buenas razones.</p>

<p><strong>Primero; Cristo nos orden&oacute; hacerlo.</strong> Un buen entrenador de atletismo presenta una lista de reglas y normas que los atletas deben seguir y les dice, &ldquo;Estas son las cosas que ustedes deben cumplir si esperan formar parte del equipo.&rdquo; Los atletas tienen en cuenta esto y obedecen las reglas, o de lo contrario no son incluidos en el equipo.</p>

<p>El patr&oacute;n le dice a su empleado, &ldquo;&eacute;stas son las reglas&rdquo; y el empleado las obedece o pierde el trabajo.</p>

<p>En tiempo de guerra, el comandante da &oacute;rdenes espec&iacute;ficas. Los soldados obedecen, son juzgados en consejo de guerra y enviados r&aacute;pidamente a prisi&oacute;n o ejecutados, dependiendo de la gravedad de la ofensa.</p>

<p>El Se&ntilde;or Jesucristo ha dado un mandato, &ldquo;Id&rdquo;, y ning&uacute;n creyente sincero puede tomar Su orden a la ligera.</p>

<p>Pero la mayor&iacute;a de los cristianos nunca han tomado en serio este mandamiento del Se&ntilde;or. Hemos estado jugando mientras nuestro Se&ntilde;or est&aacute; en llamas. Somos como los hombres y mujeres insensatos que est&aacute;n dibujando cuadros en las paredes de un edifico en llamas. Estamos tratando asuntos irrelevantes, cuando son los corazones de las personas los que necesitan ser cambiados. Los problemas del mundo que amenazan devorar a la humanidad, s&oacute;lo pueden ser resueltos por medio de la fe en Cristo y la obediencia a sus mandamientos.</p>

<p>Si nosotros tomamos a nuestro Se&ntilde;or en serio, debemos dedicarnos completamente, tiempo, talento y finanzas, al cumplimiento de la Gran Comisi&oacute;n, no como una obligaci&oacute;n legalista, sino como una expresi&oacute;n de amor y gratitud por lo que Cristo ha hecho por nosotros. Si queremos obedecerle, &Eacute;l dice, &ldquo;Id&rdquo;, y esta es raz&oacute;n suficiente para ir. En San Marcos 8:34-38 se registra el mandato de nuestro Se&ntilde;or a todos sus disc&iacute;pulos y, juntamente con San Marcos 10:29,30 y San Juan 14:21, se prometen ricas recompensas y grandes bendiciones para todos los que conf&iacute;an en &Eacute;l y le obedecen.</p>

<div class="quote-left">Y llamando a la gente y a sus disc&iacute;pulos, les dijo: Si alguno quiere venir en pos de m&iacute;, ni&eacute;guese a s&iacute; mismo, y tome su cruz y s&iacute;game. Porque todo el que quiera salvar su vida, la perder&aacute;; y todo el que pierda su vida por causa de m&iacute; y del Evangelio, la salvar&aacute;. Porque, &iquest;qu&eacute; aprovechar&aacute; el hombre si ganare todo el mundo, y perdiere su alma? Porque el que se avergonzare de m&iacute; y de mis palabras en esta generaci&oacute;n ad&uacute;ltera y pecadora, el Hijo del Hombre se avergonzar&aacute; tambi&eacute;n de &eacute;l, cuando venga en la gloria de su Padre con los santos &aacute;ngeles.</div>

<p>&nbsp;</p>

<div class="quote-right">De cierto os digo que no hay ninguno que haya dejado casa, o hermanos,o hermanas, o padre, o madre, o mujer, o hijos, o tierras, por causa de m&iacute; y del Evangelio, que no reciba cien veces m&aacute;s ahora en este tiempo; casas, hermanos, hermanas, madres, hijos y tierras, con persecuciones; y en el siglo venidero la vida eterna.</div>

<p>&nbsp;</p>

<div class="quote-left">El&nbsp;que tiene mis mandamientos, y los guarda, &eacute;se es el que me ama; y el que me ama, ser&aacute; amado por mi Padre, y yo le amar&eacute;, y me manifestar&eacute; a &eacute;l.</div>

<p>&nbsp;</p>

<p><strong>Segundo; los hombres est&aacute;n perdidos sin Cristo.</strong> Jes&uacute;s dijo, &ldquo;Yo soy el camino, y la verdad, y la vida. Nadie viene al Padre sino por m&iacute;.</p>

<p>Esto puede sonar exagerado, cerrado o intolerante, pero eso es lo que el Se&ntilde;or Jes&uacute;s dijo, y &iexcl;Jesucristo es Dios! Por muchos a&ntilde;os le he preguntado a las personas de todo el mundo si han encontrado a Dios. Aparte de los que han conocido a Cristo en un encuentro personal y vital, la respuesta general es, &ldquo;&iexcl;Estoy buscando a Dios; espero encontrarlo, pero no lo he encontrado todav&iacute;a!&rdquo;</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/TC7-4.png" style="width:100%" /></p>

<p>Ninguna persona encontrar&aacute; a Dios hasta que reciba a Cristo. &iquest;Cree usted realmente que una persona sin Cristo est&aacute; perdida? &iquest;Se le ha ocurrido que algunos de sus familiares y amigos, sus vecinos y colegas que no conocen a Cristo, est&aacute;n espiritualmente muertos? La Palabra de Dios es enf&aacute;tica y clara:</p>

<div class="quote-right">Yen ning&uacute;n otro hay salvaci&oacute;n; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.</div>

<p>Todos los hombres, mujeres, ni&ntilde;os y ni&ntilde;as est&aacute;n perdidos sin Cristo.</p>

<p><strong>Tercero; en todas partes las personas tienen hambre de Dios. </strong>El hambre de Dios que tienen ha sido demostrada en miles de formas desde la creaci&oacute;n del hombre. Esta ha sido nuestra experiencia personal desde el comienzo del ministerio de la Cruzada Estudiantil y Profesional para Cristo. Como parte de nuestro programa de capacitaci&oacute;n mundial, dedicamos varias horas cada semana a hacer evangelizaci&oacute;n personal en las comunidades locales, en lugares de recreo y en reuniones p&uacute;blicas.</p>

<p>Frecuentemente, miles de personas hacen oraci&oacute;n para recibir a Cristo en una sola tarde. Por ejemplo, en una ocasi&oacute;n, cuando diez mil cristianos coreanos que tomaban un Seminario de Capacitaci&oacute;n en Liderazgo en Se&uacute;l salieron a evangelizar a los no-cristianos, m&aacute;s de diecis&eacute;is mil personas oraron recibiendo a Cristo. Durante un congreso internacional de tres d&iacute;as, por lo menos diecisiete mil personas escucharon que pod&iacute;an tener una relaci&oacute;n personal con Jesucristo. Por intermedio de 155 personas de M&eacute;xico y veinticinco coordinadores latinoamericanos de la Cruzada Estudiantil y Profesional para Cristo; otros 1.245 indicaron que hab&iacute;an recibido a Cristo. Los coordinadores de la Cruzada Estudiantil en la India oraron para que cinco mil estudiantes recibieran a Cristo en un solo a&ntilde;o, y Dios respondi&oacute; con m&aacute;s de cinco mil nuevos creyentes.</p>

<p>Durante un per&iacute;odo de aproximadamente seis meses, cuatro equipos de atletas en acci&oacute;n de la Cruzada Estudiantil y Profesional para Cristo, dos grupos de cantantes, y Andr&eacute; Kole, un ilusionista bastante reconocido, presentaron a Cristo a 351.887 estudiantes en 629 presentaciones. M&aacute;s de cincuenta mil indicaron que hab&iacute;an recibido a Cristo como su Salvador. Muchos miles de estudiantes m&aacute;s y laicos hicieron compromiso con Cristo, por medio del ministerio de otros coordinadores y de los miles a los que ellos hab&iacute;an capacitado.</p>

<p>Decenas de millones en el mundo entero han tomado decisiones de salvaci&oacute;n despu&eacute;s de ver la pel&iacute;cula &ldquo;JES&Uacute;S&rdquo; en sus propios idiomas.</p>

<p>Recuerdo a un portero a quien le habl&eacute; de Cristo en un hotel donde me estaba hospedando. &Eacute;l estaba muy desanimado.</p>

<p>&ldquo;Los porteros no somos muy importantes&rdquo;, me dijo. &ldquo;La mayor&iacute;a mira a los porteros como seres inferiores.&rdquo;</p>

<p>Yo puse mi mano sobre su hombro y le dije, &ldquo;Quiero que sepa que Dios lo ama y que yo lo amo tambi&eacute;n. A los ojos de Dios usted es tan importante como la persona m&aacute;s famosa del mundo.&rdquo;</p>

<p>El Esp&iacute;ritu Santo hab&iacute;a preparado su coraz&oacute;n para las &ldquo;Buenas Nuevas,&rdquo; y &eacute;l recibi&oacute; a Cristo como su Salvador, cuando nos inclinamos para hacer una oraci&oacute;n.</p>

<p>Todas las personas del mundo est&aacute;n hambrientas de nuestro Se&ntilde;or Jesucristo.</p>

<p><strong>Cuarto: Es urgente completar la tarea mientras las puertas de la oportunidad est&aacute;n todav&iacute;a abiertas</strong>. Los campos espirituales nunca hab&iacute;an estado tan maduros para la cosecha. Nosotros no debemos desperdiciar esta&nbsp;oportunidad sin precedentes. Si planea hacer algo por Cristo y Su reino, h&aacute;galo ahora antes que la cosecha finalice.</p>

<h3>&iquest;Cu&aacute;ndo se cumplir&aacute; la Gran Comisi&oacute;n?</h3>

<p>La Gran Comisi&oacute;n es idea del Se&ntilde;or Jesucristo y s&oacute;lo &Eacute;l, en su soberan&iacute;a y omnisciencia, sabe cu&aacute;ndo y c&oacute;mo ser&aacute; cumplida. Sin embargo, ya que &Eacute;l nos dio el mandato y ha prometido equiparnos para hacer Su voluntad, debemos comprender que &Eacute;l espera que nosotros cumplamos la Gran Comisi&oacute;n en cada generaci&oacute;n .</p>

<div class="block-quote">La Gran Comisi&oacute;n es idea del Se&ntilde;or Jesucristo y s&oacute;lo &Eacute;l, en su soberan&iacute;a y omnisciencia, sabe cu&aacute;ndo y c&oacute;mo ser&aacute; cumplida. Sin embargo, ya que &Eacute;l nos dio el mandato y ha prometido equiparnos para hacer Su voluntad, debemos comprender que &Eacute;l espera que nosotros cumplamos la Gran Comisi&oacute;n en cada generaci&oacute;n .</div>

<p>En la actualidad, todas las naciones del mundo est&aacute;n recibiendo el Evangelio, ya sea a trav&eacute;s de disc&iacute;pulos capacitados, a trav&eacute;s de la radio, por medio de la televisi&oacute;n o mediante literatura. Pero a pesar de que hay un fuerte testimonio de Cristo en cada naci&oacute;n, la Gran Comisi&oacute;n no se ha cumplido, y permancecer&aacute; sin cumplirese hasta que en cada naci&oacute;n haya una cantidad suficiente de disc&iacute;pulos como para saturar el pa&iacute;s, y sean alcanzadas todas las etnias y grupos, con el Evangelio. Nosotros debemos estar tan interesados en hacer disc&iacute;pulos como estamos en ver conversiones, y m&aacute;s interesados a&uacute;n en la multiplicaci&oacute;n espiritual de lo que estamos en el crecimiento num&eacute;rico.</p>

<p>El cumplimiento de la Gran Comisi&oacute;n no significa que toda persona responder&aacute; al Evangelio en nuestra generaci&oacute;n. Algunos, debido a la dureza espiritual del coraz&oacute;n, inclusive se niegan a escuchar el Evangelio; otros son mental y f&iacute;sicamente incapaces de responder. Pero esto significa que deber&iacute;amos tratar de hacer una presentaci&oacute;n del Evangelio audaz, inteligente y en oraci&oacute;n a toda persona y dejarle los resultados a Dios.</p>

<p>No significa que la mayor&iacute;a de los que escuchan el Evangelio se volver&aacute;n cristianos, pero s&iacute; que por lo menos tendr&aacute;n la opci&oacute;n de escuchar y creer. Nosotros creemos que todo hombre, mujer o ni&ntilde;o sobre la tierra, debe tener la oportunidad de decirle &ldquo;s&iacute;&rdquo; a Cristo, despu&eacute;s de escuchar una presentaci&oacute;n clara y culturalmente relevante del Evangelio. No es justo que millones de americanos oigan acerca de Cristo miles de veces, cuando m&aacute;s de dos mil millones de personas no han o&iacute;do el Evangelio ni siquiera una vez.</p>

<p>Si se va a cumplir la Gran Comisi&oacute;n en nuestra generaci&oacute;n, hoy es el d&iacute;a de actuar. Debemos comenzar ahora y dedicarnos diariamente, como una manera de vivir, a comunicar el amor y el perd&oacute;n de Dios a toda persona que conozcamos.</p>

<p>Desde el momento en que nos levantamos en la ma&ntilde;ana hasta que nos vamos a la cama por la noche, nuestra meta principal debe ser compartir &ldquo;las noticias m&aacute;s maravillosas que se hayan anunciado&rsquo;&rsquo;.</p>

<h3>&iquest;A d&oacute;nde debemos ir a cumplir la Gran Comisi&oacute;n?</h3>

<p>Debemos ir a todo el mundo. Sin embargo, Jes&uacute;s nos dio una estrategia a seguir. Justo antes que &Eacute;l ascendiera a los cielos, le dijo a sus disc&iacute;pulos: Me ser&eacute;is testigos en Jerusal&eacute;n, en toda Judea, en Samaria, y hasta lo &uacute;ltimo de la tierra.</p>

<p>El significado original de este mandato sugiere que nosotros debemos participar activamente en ayudar a alcanzar cada &aacute;rea al mismo tiempo, desde Jerusal&eacute;n a lo &uacute;ltimo de la tierra. Yo le animo a comenzar a presentar a Cristo como una nueva manera de vivir en su Jerusal&eacute;n, su hogar, su vecindario, su universidad o aula de clase, su oficina o f&aacute;brica. Busque formas de presentar a Cristo en su comunidad, en su provincia, su naci&oacute;n, nuestra Judea y en el resto del mundo.</p>

<p>Dios quiere que usted ayude a propagar Sus Buenas Nuevas al mundo entero por medio de sus oraciones, de sus inversiones financieras y mediante su participaci&oacute;n personal, o por medio de estas tres actividades juntas.</p>

<p>&iquest;C&oacute;mo ser&aacute; cumplida la Gran Comisi&oacute;n y c&oacute;mo puede usted ayudar?</p>

<p>Esa es la gran pregunta para la mayor&iacute;a de las personas. Tal vez usted piense, &ldquo;Estoy convencido que los hombres est&aacute;n perdidos sin Cristo y que las multitudes est&aacute;n listas para recibirlo. Quiero obedecer a nuestro Se&ntilde;or Jesucristo ayudando a cumplir la Gran Comisi&oacute;n, pero &iquest;qu&eacute; quiere Dios que yo haga? &iquest;c&oacute;mo puedo comenzar?</p>

<p>Esta gran tarea podr&aacute; ser lograda s&oacute;lo cuando los millones de cristianos trabajen juntos, proporcionando sus recursos y desarrollando una estrategia personal que se vincule con la estrategia global de nuestro Se&ntilde;or Jesucristo.</p>

<p>La estrategia mundial de la Cruzada Estudiantil y Profesional para Cristo es ayudar a cumplir la Gran Comisi&oacute;n, promoviendo la movilizaci&oacute;n de millones de cristianos en miles de iglesias de todas las denominaciones, y cientos de organizaciones misioneras, para ayudar a saturar el mundo con el evangelio.</p>

<p>Esta estrategia es apoyada financieramente por miles de l&iacute;deres cristianos en cada continente. Continuamos con el proceso de Capacitaci&oacute;n para Nuevos Coordinadores, Estos centros est&aacute;n formados por personas capacitadas, dedicadas al entrenamiento de multiplicadores espirituales y con herramientas que el equipo de la pel&iacute;cula &ldquo;JES&Uacute;S&rdquo; contin&uacute;a desarrollando, as&iacute; como otras estrategias de evangelizaci&oacute;n para ayudar a saturar cada una de las &aacute;reas demogr&aacute;ficas con el Evangelio. En cooperaci&oacute;n con miles de cristianos de todas las denominaciones, nuestra meta de oraci&oacute;n y objetivo espiritual es:</p>

<ol>
	<li>Presentar el Evangelio a cada persona, en cualquier lugar y guiarlos a Jesucristo.</li>
	<li>Empezar con ellos una Comunidad Misional donde ser&aacute;n discipulados y as&iacute; podr&aacute;n alcanzar otras personas para Cristo.</li>
	<li>Establecer movimientos en las principales universidades situadas en ciudades estrat&eacute;gicas del mundo, para alcanzar a los estudiantes y a los profesores para Cristo.</li>
	<li>Establecer una iglesia o Comunidad Misional por cada mil personas.</li>
</ol>

<p>Actualmente la pel&iacute;cula &ldquo;JES&Uacute;S&rdquo; ha sido traducida en 1.852 idiomas y dialectos, se registra alrededor de 9 millones de reproducciones y alrededor de 6 millones de personas que luego de ver la pel&iacute;cula, recibieron a Cristo como su Se&ntilde;or y Salvador. La meta es continuar traduciendo la pel&iacute;cula &ldquo;JES&Uacute;S&rdquo; en otros idiomas y dialectos.</p>

<p>El edificar personas en la fe cristiana incluye lograr que participen en el compa&ntilde;erismo y en las ense&ntilde;anzas ofrecidas en la iglesia local, en grupos de estudios b&iacute;blicos y en comunidades misionales. A los nuevos creyentes se les ense&ntilde;a c&oacute;mo estudiar la santa e inspirada Palabra de Dios, c&oacute;mo orar y c&oacute;mo caminar en el amor de Cristo y en el poder del Esp&iacute;ritu Santo.</p>

<p>Aprenden sobre el amor incondicional de Dios y de su total perd&oacute;n y aceptaci&oacute;n hecho posible para nosotros en Cristo, gracias a su muerte en la cruz por nuestros pecados.</p>

<p>Tambi&eacute;n aprenden que el poder de Su resurrecci&oacute;n est&aacute; disponible a nosotros, y que nos permite vivir una vida de gozo, una vida victoriosa y fruct&iacute;fera. El crecimiento cristiano se produce con mayor rapidez cuando se ense&ntilde;a a las personas a hablar de Cristo con otros, y se les anima a compartir su fe regularmente, como una manera de vivir.</p>

<p>El resultado inevitable de este &eacute;nfasis apropiado en ganar y edificar es el enviar personas al mundo. Aqu&eacute;l que entiende correctamente el amor y el perd&oacute;n de Dios, y al que se le ha ense&ntilde;ado c&oacute;mo comunicar su fe en Cristo, no estar&aacute; satisfecho siendo meramente un cristiano mundano (carnal), espiritualmente impotente, sin fruto, y mediocre. Como los primeros disc&iacute;pulos cuyas redes se llenaron milagrosamente con peces, esta persona &ldquo;dejar&aacute; todo y seguir&aacute; a Cristo.&rdquo;</p>

<p>Cualquier estrategia que espere ayudar a evangelizar el mundo, debe hacer de la oraci&oacute;n una prioridad. Para este fin, se necesitan millones de disc&iacute;pulos que sean fieles en orar diariamente. Nosotros estamos pidi&eacute;ndole a Dios que levante millones de cristianos para formar parte de los equipos de Oraci&oacute;n de Cruzada Estudiantil y Profesional para Cristo en cada pa&iacute;s, soldados de oraci&oacute;n que fielmente intercedan todos los d&iacute;as por un poderoso avivamiento espiritual en el mundo entero.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ SU &ldquo;ESTRATEGIA PERSONAL&rdquo;</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p>La Gran Comisi&oacute;n puede cumplirse si millones de cristianos desarrollan una estrategia personal que se vincule directamente con la estrategia global de Jesucristo. Un cristinao con una buena estrategia personal, y concentrando todos sus esfuerzos, puede acrecentar y multiplicar su productividad espiritual m&aacute;s all&aacute; de lo imaginable.</p>

<p>&ldquo;Pero,&rdquo; tal vez Ud. se pregunte, &ldquo;&iquest;qu&eacute; es una estrategia personal?&rdquo;</p>

<p>Una estrategia personal es un plan de acci&oacute;n deliberado, que una persona se traza para alcanzar una meta espec&iacute;fica. Ya que la meta de todo creyente debe ser ayudar a cumplir la Gran Comisi&oacute;n, su plan personal deber&aacute; incluir evangelizaci&oacute;n, discipulados, suma y multiplicaci&oacute;n espiritual.</p>

<p>La adici&oacute;n o suma espiritual se da cuando usted habla a una persona de Cristo, pero cuando usted disc&iacute;pula a un nuevo cristiano y le ayuda a ganar, discipular y enviar a otros que har&aacute;n lo mismo de ganar y discipular a otros, generaci&oacute;n tras generaci&oacute;n, eso se llama multiplicaci&oacute;n espiritual.</p>

<p>Perm&iacute;tame ilustrarlo. Durante un banquete de la Cruzada Estudiantil para Cristo en Manila, Las Filipinas, el director de nuestro Centro de Capacitaci&oacute;n para Nuevos Coordinadores la Gran Comisi&oacute;n present&oacute; a un m&eacute;dico a quien &eacute;l hab&iacute;a hablado de Cristo y a quien hab&iacute;a discipulado. El doctor se puso de pie y dio su testimonio, y luego present&oacute; a una de las personas a quienes &eacute;l hab&iacute;a presentado a Cristo y hab&iacute;a discipulado.</p>

<p>Esta otra persona, a su vez, dio su testimonio y present&oacute; a uno de los estudiantes de medicina a quien &eacute;l hab&iacute;a presentado a Cristo que tambi&eacute;n hab&iacute;a discipulado. Este era el resultado de diez generaciones espirituales de un ministerio que hab&iacute;a comenzado con uno de nuestros coordinadores americanos y quien hab&iacute;a dedicado su vida a discipular personas que a su vez discipulaban otros.</p>

<div class="block-quote">Una estrategia personal es un plan de acci&oacute;n deliberado, que una persona se traza para alcanzar una meta espec&iacute;fica. Ya que la meta de todo creyente debe ser ayudar a cumplir la Gran Comisi&oacute;n, su plan personal deber&aacute; incluir evangelizaci&oacute;n, discipulados, suma y multiplicaci&oacute;n espiritual.</div>

<p>&nbsp;</p>

<p>Recientemente viaj&eacute; a Tailandia donde encontr&eacute; muchos de estos &ldquo;disc&iacute;pulos multiplicadores&rdquo;. Uno de ellos era un hombre que es el padre espiritual de doce generaciones. &Eacute;l ha guiado personalmente a m&aacute;s de mil quinientas personas a Cristo en los &uacute;ltimos cuatro a&ntilde;os. Cuando estuve all&aacute;, me present&oacute; a uno de sus disc&iacute;pulos, quien a su vez me present&oacute; a uno de sus disc&iacute;pulos, y as&iacute; sucesivamente, en una l&iacute;nea de doce hombres y mujeres. El &uacute;ltimo disc&iacute;pulo de la cadena era cristiano hac&iacute;a s&oacute;lo seis meses y ya hab&iacute;a presentado a doce personas a Cristo y estaba en el proceso de discipular a algunos de ellos.</p>

<p>Estos creyentes de Tailandia saben que no es suficiente guiar a otros al Se&ntilde;or y decirles, &ldquo;&iquest;No les parece magn&iacute;fico?&rdquo;, y despu&eacute;s olvidarlos. Por el contrario, ganan a las personas y las discipulan para que &eacute;stas a su vez, ganen y discipulen aun a otras m&aacute;s.</p>

<p>&iquest;Le gustar&iacute;a presentar a cientos, aun miles, de hombres y mujeres a nuestro Se&ntilde;or Jesucristo? Usted puede hacerlo.</p>

<p>Si lleva tan s&oacute;lo a una persona al Se&ntilde;or Jesucristo cada mes, en los siguientes veinte a&ntilde;os presentar&iacute;a 240 almas a Cristo. Este es el principio de sumar y aun as&iacute; muy pocos cristianos tienen un testimonio tan fruct&iacute;fero.</p>

<p>Sin embargo, si discipula a todos esos 240 nuevos creyentes para que ellos a su vez ganen y discipulen a otros, generaci&oacute;n tras generaci&oacute;n, muchos millones de personas ser&iacute;an llevados a Cristo en el mismo n&uacute;mero de a&ntilde;os.</p>

<p>El ap&oacute;stol Pablo se refiri&oacute; a la multiplicaci&oacute;n espiritual en su Segunda Carta a Timoteo. &ldquo;Lo que has o&iacute;do de m&iacute; ante muchos testigos, esto encarga a hombres fieles que sean id&oacute;neos para ense&ntilde;ar tambi&eacute;n a otros.&rdquo;</p>

<p>Comenzando s&oacute;lo con dos personas y usando este ciclo sencillo y continuo de discipulado y la multiplicaci&oacute;n espiritual; el mundo entero podr&iacute;a ser evangelizado y saturado con el Evangelio en s&oacute;lo treinta y dos pasos subsecuentes, porque dos, multiplicado por s&iacute; mismo treinta y dos veces, iguala a la poblaci&oacute;n del mundo.</p>

<p>Conforme cada uno de nosotros desarrolla una estrategia personal, Dios podr&aacute; usarnos para tener una funci&oacute;n fundamental en el cumplimiento de la Gran Comisi&oacute;n.</p>

<p>Todo reside en esta sencilla ecuaci&oacute;n:</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/TC7-5.png" style="width:100%" /></p>

<p>Pero usted tal vez se pregunte c&oacute;mo desarrollar una estrategia personal. Perm&iacute;tame darle algunas sencillas sugerencias.</p>

<h3>Est&eacute; seguro que est&aacute; comprometido con Jesucristo y lleno del Esp&iacute;ritu Santo</h3>

<p>En su ep&iacute;stola a los Romanos cap&iacute;tulo 12 el ap&oacute;stol Pablo nos anima, &ldquo;os ruego por las misericordias de Dios que present&eacute;is vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional. No os conform&eacute;is a este siglo, sino transformaos por medio de la renovaci&oacute;n de vuestro entendimiento&rdquo;.</p>

<p>Mi esposa y yo &eacute;ramos bastante materialistas, ego&iacute;stas y ambiciosos antes de llegar a ser cristianos. Despu&eacute;s de que entregamos nuestras vidas a Cristo, crecimos en la comuni&oacute;n de la iglesia, y conforme estudiavamos la Biblia y nos enter&aacute;bamos del amor y la gracia de Dios, am&aacute;bamos m&aacute;s a Jes&uacute;s, y m&aacute;s quer&iacute;amos servirle.</p>

<p>Un d&iacute;a, en la primavera de 1951, nos arrodillamos en nuestro hogar, all&aacute; en las colinas de Hollywood, California, y literalmente firmamos un contrato con el Se&ntilde;or como un acto formal de renuncia a todos los derechos a gozar de nuestras vidas y rindi&eacute;ndole todo a &Eacute;l. Cada uno de nosotros hizo una lista de todas las cosas que hab&iacute;a deseado antes de enamorarnos de Cristo. &iexcl;Y vaya que ten&iacute;amos gustos muy lujosos! Fue as&iacute; como comenzamos a seguirlo verdaderamente.</p>

<p>Hicimos una oraci&oacute;n a &Eacute;l dici&eacute;ndole; &ldquo;Se&ntilde;or, queremos rendirte a Ti todos nuestros planes y deseos ambiciosos, mundanos y materialistas. Mediante Tu gracia y poder fortalecedor, estamos dando la espalda a todas las cosas que nos obstaculizan para poder servirte a Ti, el Dios viviente, en forma m&aacute;s efectiva y fruct&iacute;fera. T&uacute; nos has ordenado buscar primero Tu reino y acumular nuestros tesoros en los cielos. Ahora queremos buscar Tu camino por sobre todas las cosas. Queremos que nuestras finanzas sean usadas para Tu gloria. Queremos servirte y hacer lo que T&uacute; quieras hacer e ir a donde T&uacute; quieras que vayamos, sin importar el costo.&rdquo;</p>

<p>Al comenzar su carta a los cristianos de Roma, Pablo escribi&oacute;, &ldquo;Pablo, siervo de Jesucristo, llamado a ser ap&oacute;stol, apartado para el Evangelio de Dios&rdquo;.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/TC7-6.png" style="float:right; width:50%" />En las palabras de Pablo, mi esposa Vonette y yo llegamos a ser esclavos cuando hicimos nuestro compromiso con el Se&ntilde;or Jes&uacute;s.</p>

<p>Poco tiempo despu&eacute;s Dios me dio la visi&oacute;n de ayudar a alcanzar el mundo para Cristo, la cual mencion&eacute; anteriormente. Nosotros le llamamos a esta visi&oacute;n la Cruzada Estudiantil para Cristo, Vida Nueva para el Mundo.</p>

<p>En la actualidad, poseemos muy pocos de bienes materiales. Lo que tenemos son mayormente cosas personales. No somos due&ntilde;os de nuestra casa, la cual alquilamos, ni de un auto, ya que nuestro ministerio provee transporte.</p>

<p>Vivimos conforme Dios suple nuestras necesidades literalmente d&iacute;a a d&iacute;a. Pero,</p>

<p>&iexcl;que aventura es vivir para Cristo! servir al Rey de reyes y Se&ntilde;or de se&ntilde;ores sin las ataduras e impedimentos de las posesiones que a menudo nos poseen y roban nuestro poder con Dios y hacia los dem&aacute;s.</p>

<p>Esto puede que nos sea exactamente lo que Dios le ordena hacer a usted, pero cualquiera sea su situaci&oacute;n, puede confiar en un Dios amoroso cuando le rinda todas las ambiciones de su vida. Ninguna experiencia en la vida se compara con la de buscar primero el reino de Dios, acumular tesoros en los cielos, mantener a Cristo en control de su vida, haciendo lo que &Eacute;l le llama a hacer, y ser un instrumento a trav&eacute;s del cual &Eacute;l cambia las vidas de otros. Una vida as&iacute; es realmente vivida al m&aacute;ximo. Todas las ma&ntilde;anas y por las noches tambi&eacute;n, nos arrodillamos en la presencia de nuestro Se&ntilde;or, en lo posible lo hacemos juntos, para reconocer Su se&ntilde;or&iacute;o. Lo invitamos a ser el Se&ntilde;or en cada &aacute;rea&nbsp;de nuestras vidas y declaramos por fe la llenura del Esp&iacute;ritu Santo, para que podamos vivir vidas santas y ser testigos m&aacute;s fruct&iacute;feros de nuestro amado Se&ntilde;or.</p>

<h3>Ore por direcci&oacute;n</h3>

<p>Ore en fe confiando que Dios le guiar&aacute; a desarrollar su estrategia personal para alcanzar su &aacute;rea inmediata de influencia para Cristo. Usted no ser&aacute; quien haga su propia estrategia, sencillamente estar&aacute; descubriendo el plan que Dios ya ha dise&ntilde;ado.</p>

<p>Jes&uacute;s fue un ejemplo perfecto en esto. Mientras estuvo en la tierra, consult&oacute; toda decisi&oacute;n importante y todo punto crucial en su vida, con su Padre Celestial.</p>

<p>Recuerde, cuando usted lo pida en oraci&oacute;n, espere que Dios le provea la mejor estrategia y todo lo que sea necesario para comenzar a poner un plan en acci&oacute;n. La fe que espera resultados agrada a Dios.</p>

<h3>Ponga por escrito la estrategia que Dios le revele en respuesta a sus oraciones</h3>

<p>Haga listas de personas espec&iacute;ficas a quienes desea hablarles de Cristo. Considere grupos espec&iacute;ficos en su vida y desarrolle una estrategia para alcanzar a cada uno.</p>

<p>Comience con su familia. Recuerde que en su hogar, m&aacute;s que en cualquier otro lugar, su vida ser&aacute; su testimonio. Conf&iacute;e en Dios continuamente para estar siempre lleno del Esp&iacute;ritu Santo, para que sus acciones (el fruto del Esp&iacute;ritu) den testimonio de lo que Jes&uacute;s ha hecho en su vida.</p>

<p>Planee c&oacute;mo puede alcanzar a las personas con las cuales trabaja. Busque a aquellos que son cristianos, y p&iacute;dales reunirse con usted para evangelizar su oficina. En su iglesia, p&oacute;ngase a disposici&oacute;n de su pastor. Ofr&eacute;zcase para ense&ntilde;ar en la Escuela Dominical, y especialmente, sea parte del equipo de evangelismo. Anime a otros miembros de su iglesia a desarrollar sus propias estrategias.</p>

<p>Invite a sus vecinos a un caf&eacute; o t&eacute; o postre evangel&iacute;stico, o inicie un estudio b&iacute;blico para evangelizar en su barrio. Cu&eacute;ntele a sus amigos lo que Cristo ha hecho en su vida y an&iacute;melos a creer que &Eacute;l puede hacer lo mismo por ellos.</p>

<p>Haga oraci&oacute;n por aquellos a quienes quiere compartir el Evangelio. Luego ac&eacute;rquese a ellos. H&aacute;bleles del amor y el perd&oacute;n de Dios que est&aacute; disponible por medio de Jesucristo. D&eacute;les la oportunidad de recibirlo.</p>

<p>Comparta su fe como un h&aacute;bito constante en su vida, hable de Cristo, dondequiera que vaya. Cuando las personas conf&iacute;en en &Eacute;l como Se&ntilde;or y Salvador, comience a discipularlas e incl&uacute;yalas en el ciclo de multiplicaci&oacute;n espiritual. Inv&iacute;telas a reunirse con usted en un esfuerzo para saturar su comunidad entera con el mensaje de Cristo.</p>

<h3>Busque la capacitaci&oacute;n</h3>

<p>Aprenda todo lo que pueda acerca de c&oacute;mo llevar a cabo su estrategia personal para ayudar a cumplir la Gran Comisi&oacute;n. Millones de estudiantes, de profesionales y pastores est&aacute;n aprovechando la capacitaci&oacute;n y los materiales que ofrece la Cruzada Estudiantil para Cristo. Esta capacitaci&oacute;n le proporcionar&aacute; t&eacute;cnicas para ganar a las personas para Cristo, edific&aacute;ndolas en la fe y enviandolas al mundo con las Buenas Nuevas del amor y perd&oacute;n de Dios.</p>

<p>Una nueva serie de capacitaci&oacute;n en video cintas de 6 horas, alcanzando su mundo para Cristo est&aacute; disponible para ayudarlo a cristianizar a sus vecinos y seres queridos para Cristo. Esta serie tambi&eacute;n muestra c&oacute;mo usar el v&iacute;deo &ldquo;JES&Uacute;S&rdquo; en su propio hogar u oficina como una herramienta evangelizadora.</p>

<p>Yo le animo a dise&ntilde;ar su estrategia personal ahora mismo. Haga una lista de aqu&eacute;llos a quienes les quiere hablar de Cristo. Haga otra lista de personas a quienes puede discipular, capacit&aacute;ndolas para experimentar y compartir la vida abundante en Cristo. Comience inmediatamente a desarrollar su estrategia.</p>

<h3>Tome la iniciativa</h3>

<p>Tome la iniciativa de ayudar a cumplir la Gran Comisi&oacute;n all&iacute; donde usted vive, en su &ldquo;Jerusal&eacute;n.&rdquo; Esta deber&aacute; ser su prioridad. Reclame para Cristo y en oraci&oacute;n sus parientes, amigos, vecinos y colegas. Luego pres&eacute;nteles el Evangelio. Conforme aplica esta estrategia personal, piense m&aacute;s all&aacute; de sus metas locales, hacia las metas mundiales para el cumplimiento de la Gran Comisi&oacute;n.</p>

<p>Esto le ayudar&aacute; a no desviarse en asuntos relativamente improductivos.</p>

<p>Bajo la gu&iacute;a del Esp&iacute;ritu Santo y con total confianza, puede proceder a planear su trabajo y a aplicar dicho plan.</p>

<p>Todo cristiano, sea estudiante, ama de casa, hombre de negocios, pastor o misionero, necesita una estrategia personal para ayudar a alcanzar su propia comunidad o &aacute;rea de influencia para Cristo.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ USTED PUEDE AYUDAR A CAMBIAR EL MUNDO</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p>En este per&iacute;odo cambiante y ca&oacute;tico de la historia, los cristianos sinceros y reflexivos no pueden estar satisfechos en seguir como hasta ahora.</p>

<p>El Dr. James Stewart, de Escocia, uno de los m&aacute;s famosos eruditos del Nuevo Testamento de nuestro tiempo, dijo, &ldquo;si nosotros pudi&eacute;ramos demostrar al mundo que estar comprometidos con Cristo no es algo aburrido ni mon&oacute;tono, sino la aventura humana m&aacute;s emocionante que el esp&iacute;ritu humano puede experimentar...&rdquo;</p>

<p>Esta declaraci&oacute;n ha tenido un impacto profundo en mi vida y en mi ministerio desde que la le&iacute; en 1947. Creo que millones de cristianos, al igual que nosotros, est&aacute;n descubriendo la importancia de estar dedicados a los asuntos de nuestro Padre Celestial. Conforme observ&oacute; la obra de Dios en las vidas de hombres y mujeres alrededor del mundo, a trav&eacute;s de muchos grupos movimientos, estoy convencido que el avivamiento m&aacute;s grande desde el Pentecost&eacute;s ya ha comenzado.</p>

<p>Hace alg&uacute;n tiempo visit&eacute; Roma. Una noche estaba sentado en el Foro Romano, y presenci&eacute; la representaci&oacute;n, por medio de la luz y el sonido, del drama del Antiguo Imperio Romano.</p>

<p>El foro vibraba de historia y dramatismo, y yo me sent&iacute;a cautivado mientras escuchaba. Casi por mil a&ntilde;os, Roma gobern&oacute; el mundo. En ese mismo foro hab&iacute;an estado los generales victoriosos para recibir sus laureles. All&iacute; mismo los senadores se reun&iacute;an para crear las leyes que gobernaban el Imperio. All&iacute; hab&iacute;a sido asesinado Julio C&eacute;sar. Esa tarde hab&iacute;a visitado un oscuro y sucio calabozo cruzando la calle, justo al frente del foro, donde se cree que el ap&oacute;stol Pablo, prisionero por causa de su fe, hab&iacute;a pasado los &uacute;ltimos meses de su vida hasta su martirio. Si hubiera estado viviendo en esos d&iacute;as, y hubiera visitado a Pablo en ese calabozo, no habr&iacute;a quedado tan bien impresionado con este &ldquo;esclavo de Cristo&rdquo;, como con muchos de los l&iacute;deres de Roma. Pablo probablemente no era ni una figura militar, ni un orador elocuente seg&uacute;n su propia declaraci&oacute;n; pero era un hombre con una mente brillante, un coraz&oacute;n encendido y una pluma ungida, un hombre que hab&iacute;a hundido su vida con el Cristo resucitado. El era un escogido y un ungido de Dios. &Eacute;l comparti&oacute; la visi&oacute;n y la carga de Cristo por el mundo, y estaba comprometido al cumplimiento de la Gran Comisi&oacute;n.</p>

<p>Lo que Dios hizo en esa celda lleg&oacute; a tener mucho m&aacute;s significado para el bienestar del g&eacute;nero humano que cualquier cosa que hubiera pasado en el Foro Romano.</p>

<p>Dios tom&oacute; una vida rendida a &Eacute;l y la us&oacute; para ayudar a cambiar el curso de la historia. Actualmente millones de cristianos adoran a nuestro Se&ntilde;or Jesucristo, en gran parte, debido a lo que Dios hizo por medio de este ap&oacute;stol abnegado y &ldquo;esclavo&rdquo; de Jesucristo.</p>

<p>As&iacute; como Dios ha usado a Pablo y a millones de otros como &eacute;l, a trav&eacute;s de los siglos, est&aacute; buscando hombres y mujeres en nuestro tiempo, por medio de los cuales &Eacute;l pueda realizar poderosas haza&ntilde;as para Su reino.</p>

<div class="block-quote">Jes&uacute;s dijo, &ldquo;Id...haced disc&iacute;pulos a todas las naciones.&rdquo; Para hacer disc&iacute;pulos, usted debe tambi&eacute;n ser un disc&iacute;pulo. La persona comprometida con Cristo, quien entiende c&oacute;mo caminar en la llenura del Esp&iacute;ritu Santo, ayudar&aacute; a producir esa misma clase de cristianos.</div>

<p>Jes&uacute;s dijo, &ldquo;Id...haced disc&iacute;pulos a todas las naciones.&rdquo; Para hacer disc&iacute;pulos, usted debe tambi&eacute;n ser un disc&iacute;pulo. La persona comprometida con Cristo, quien entiende c&oacute;mo caminar en la llenura del Esp&iacute;ritu Santo, ayudar&aacute; a producir esa misma clase de cristianos.</p>

<p>Jes&uacute;s dice, &ldquo;Si alguno quiere venir en pos de m&iacute;, ni&eacute;guese a s&iacute; mismo, tome su cruz cada d&iacute;a, y s&iacute;game&rdquo;. Jes&uacute;s tambi&eacute;n dijo, &ldquo;Si alguno viene a m&iacute;, y no aborrece a su padre, y madre, y mujer, e hijos, y hermanos, y hermanas, y aun tambi&eacute;n su propia vida, no puede ser mi disc&iacute;pulo&rdquo;.</p>

<p>Para algunos, tal llamado al discipulado puede sonar demasiado dif&iacute;cil. Tal vez ese mismo pensamiento estaba en la mente de Pedro cuando &eacute;l le dijo a Jes&uacute;s, &ldquo;He aqu&iacute;, nosotros lo hemos dejado todo, y te hemos seguido.&rdquo; Y Jes&uacute;s contest&oacute;, &ldquo;De cierto os digo que no hay ninguno que haya dejado casa, o hermanos, o hermanas, o padre, o madre, o mujer, o hijos, o tierras, por causa de m&iacute; y del Evangelio, que no reciba cien veces m&aacute;s ahora en este tiempo; casas&nbsp;hermanos, hermanas, madres, hijos, y tierras, con persecuciones, y en el siglo venidero la vida eterna&rdquo;.</p>

<p>El cumplimiento de esta promesa se ha podido ver en las vidas de todos los que buscan primero a Cristo y su reino a trav&eacute;s de los tiempos, no siempre en cosas materiales, por supuesto, sino en recompensas mucho m&aacute;s significativas y enriquecedoras.</p>

<p>Yo nunca olvidar&eacute; la preocupaci&oacute;n de mi esposa Vonette cuando le expliqu&eacute;, en el momento en que le propuse matrimonio que, aunque yo la amaba profundamente, amaba m&aacute;s a Cristo de lo que la amaba a ella, y que &Eacute;l siempre ocupar&iacute;a el primer lugar en mi vida y en nuestro hogar.</p>

<p>Aunque en ese tiempo, ella no entend&iacute;a aquella actitud tan &ldquo;fan&aacute;tica&rdquo; de parte m&iacute;a, posteriormente rindi&oacute; su vida a Cristo y ahora dice conmigo, &ldquo;Cristo ocupa tambi&eacute;n el primer lugar en mi vida.&rdquo;</p>

<p>Debido a nuestro compromiso y amor por &Eacute;l, nos amamos mutuamente y somos m&aacute;s considerados el uno con el otro.</p>

<p>Verdaderamente Cristo ha enriquecido nuestras vidas y nuestro ministerio mucho m&aacute;s de lo que nosotros habr&iacute;amos so&ntilde;ado. Decimos junto al famoso estadista misionero C.T. Studd, &ldquo;Si Cristo es Dios y muri&oacute; por m&iacute;, no hay nada demasiado grande que yo pueda hacer por &Eacute;l.</p>

<p>Usted y yo tenemos el privilegio de ser parte del movimiento m&aacute;s significativo de todos los siglos, para cambiar el mundo: el movimiento para ayudar a cumplir la Gran Comisi&oacute;n de nuestro Se&ntilde;or Jesucristo en esta generaci&oacute;n. &iquest;Rendir&aacute; hoy su vida completamente y sin reservas a Cristo, y se dispondr&aacute; a obedecer el mandato de nuestro Se&ntilde;or? Tal vez signifique sacrificio, quiz&aacute;s hasta el martirio. Pero, &iquest;puede pensar en un l&iacute;der m&aacute;s grande a quien seguir que al Se&ntilde;or Jesucristo? Habr&aacute; una causa m&aacute;s grande que la Suya, a la que Ud. se pueda entregar? Usted deber&aacute; ayudar en el cumplimiento de la Gran Comisi&oacute;n en esta generaci&oacute;n, como una expresi&oacute;n de amor y gratitud a Cristo, por lo que &Eacute;l ha hecho y como un acto de obediencia a Su mandato.</p>

<p>Si desea comprometerse en ayudar a cumplir Su mandato, haga suya siguiente oraci&oacute;n:</p>

<div class="quote-left">&ldquo;Amado Padre celestial, me pongo a la disposici&oacute;n tuya para que hagas conmigo lo que desees. Rindo mi vida completa e irrevocablemente al se&ntilde;or&iacute;o de Jesucristo. Deseo ser un hombre, mujer, de Dios por medio del cual T&uacute; puedas traer Tu mensaje de amor y perd&oacute;n en Cristo, a todos los hombres en todas partes. Te invito a limpiarme, a capacitarme, a guiarme, a inspirarme, a ense&ntilde;arme, y a permitirme hacer s&oacute;lo aqu&eacute;llo que honre y glorifique grandemente Tu nombre. Perm&iacute;teme por medio de Tu Esp&iacute;ritu Santo contribuir con el m&aacute;ximo de mi tiempo, talento y finanzas para el cumplimiento de la Gran Comisi&oacute;n en mi tiempo. Te pido esto en el maravilloso nombre del Se&ntilde;or Jes&uacute;s. Am&eacute;n.&rdquo;</div>

<p>Si usted hizo esta oraci&oacute;n, ha hecho su compromiso con Jesucristo. A trav&eacute;s de la dedicaci&oacute;n de su tiempo, talento y finanzas, usted ayudar&aacute; a cumplir la Gran Comisi&oacute;n de nuestro Se&ntilde;or en esta generaci&oacute;n. Recuerde, por medio del poder de Jesucristo en usted y mediante la llenura del Esp&iacute;ritu Santo, usted estar&aacute; ayudando a cambiar el mundo.</p>

</div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', '¿CÓMO USTED  PUEDE AYUDAR  A CUMPLIR  LA GRAN  COMISIÓN?: ', '/content/M2/spa/tc/tc07.html')">
				<img class="social" src="@/assets/sites/mc2/images/standard/Share.png" />
			</td>
		</tr>
	</tbody>
</table>
<div class="footer">
<p class="footer">MC2</p>
<p class="footer" @click="share('website', 'https://GlobalChurchMovements.org', '')"> GlobalChurchMovements.org</p>
</div>

<!-- end mc2 sdcard languageFooter -->
<!-- end sdcard languageFooterSingle -->

</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->