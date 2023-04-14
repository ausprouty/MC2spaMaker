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
                        <div class="chapter_number ltr"><h1>6.</h1></div>
                        <div class="chapter_title ltr"><h1>¿CÓMO PUEDE  USTED DIRIGIR A  OTROS A CRISTO?</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
    <button id="MC2/spa/audio/tc/CT 6.mp3" type="button" class="external-audio">
        Escuchar &nbsp;"&iquest;C&Oacute;MO PUEDE USTED DIRIGIR A OTROS A CRISTO?"&nbsp;</button>
        <div class="collapsed"></div>
    

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ USTED PUEDE AYUDAR A CAMBIAR SU MUNDO</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p>&ldquo;De seguro que usted ha tra&iacute;do mucha felicidad a este mundo,&rdquo; dijo un hombre de negocios con l&aacute;grimas de gozo y gratitud en sus ojos. Este joven reci&eacute;n hab&iacute;a orado conmigo y hab&iacute;a recibido a Cristo como Su Salvador y Se&ntilde;or. &Eacute;l y su esposa hab&iacute;an estado buscando a Dios por alg&uacute;n tiempo y ahora, estaba ansioso de llevar a su hogar el folleto de las Cuatro Leyes Espirituales, para poder presentarle a Cristo a su propia esposa.</p>

<p>Las palabras de este entusiasta joven cristiano, han venido a mi mente una y otra vez: &ldquo;De seguro que usted ha tra&iacute;do mucha felicidad a este mundo.&rdquo;</p>

<p>Desde el a&ntilde;o 1944 he tenido el emocionante privilegio de &ldquo;traer much&iacute;sima felicidad a este mundo,&rdquo; hablando del Se&ntilde;or Jesucristo a miles de estudiantes y profesionales alrededor del mundo.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc6-1.png" style="float:right; width:50%" />El ap&oacute;stol Pablo comparte esta experiencia con los Colosenses, cuando les dice respecto a Jesucristo: &ldquo;a quien anunciamos, amonestando a todo hombre, y ense&ntilde;ando a todo hombre en toda sabidur&iacute;a, a fin de presentar perfecto en Cristo Jes&uacute;s a todo hombre.&rdquo;</p>

<p>Usted tiene el privilegio de participar junto con el Dios vivo en el cumplimiento de la Gran Comisi&oacute;n en nuestra generaci&oacute;n. En mi opini&oacute;n, la &uacute;nica manera de cambiar al mundo es cambiando a los individuos. Muchas personas cambiadas producir&aacute;n universidades cambiadas, comunidades cambiadas, ciudades, estados y naciones cambiadas: S&iacute;, un mundo verdaderamente cambiado. Jesucristo es el &uacute;nico que puede cambiar a las personas desde adentro. Usted puede ayudar a cambiar el mundo, llevando a las personas a Jesucristo.</p>

<p>Uno de los errores m&aacute;s grandes de todos los siglos es la idea, que prevalece bastante, de que los hombres y mujeres no quieren conocer a Dios. Dondequiera que voy alrededor del mundo, encuentro amplias pruebas de que lo contrario a esto es la verdad. El Esp&iacute;ritu Santo ha creado un hambre por Dios en los corazones de las multitudes. Basado en mi experiencia y a trav&eacute;s de mucha observaci&oacute;n, estoy plenamente convencido de que la mayor&iacute;a de los no creyentes del mundo, est&aacute;n listos para confiar en Cristo, por medio de una presentaci&oacute;n clara y sencilla del Evangelio, realizada de forma apropiada por un testigo lleno del Esp&iacute;ritu Santo.</p>

<p>Sin embargo, es tr&aacute;gico que la mayor&iacute;a de los cristianos nunca han hablado a nadie del Se&ntilde;or Jesucristo. Hay dos razones aparentes para esto.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc6-2.png" style="float:left; width:50%" />Primero, el cristiano promedio est&aacute; viviendo una vida fracasada, sin fruto espiritual, y mundanal (carnal).</p>

<p>Este no est&aacute; caminando en la plenitud y control del Esp&iacute;ritu Santo. Un l&iacute;der cristiano explic&oacute; su victoria a la natural resistencia a evangelizar a otros, al darse cuenta de que &ldquo;su cristianismo era digno de exportaci&oacute;n.&rdquo; Si esto es verdad en su vida, le animo a repasar mis mensajes: C&oacute;mo puede usted experimentar el amor y perd&oacute;n de Dios, C&oacute;mo puede usted ser lleno con el Esp&iacute;ritu y C&oacute;mo puede usted caminar en el Esp&iacute;ritu Santo.</p>

<p>La segunda raz&oacute;n es la falta de capacitaci&oacute;n. La mayor&iacute;a de los cristianos nunca han sido capacitados para comunicar su fe en Cristo de forma efectiva. Nunca han aprendido c&oacute;mo comenzar una conversaci&oacute;n sobre Cristo, c&oacute;mo explicar con sencillez y claridad el Evangelio, ni c&oacute;mo guiar a una persona a tomar la decisi&oacute;n de recibir a Cristo por fe.</p>

<p>Deseo compartirle en las p&aacute;ginas siguientes las razones por las que Jes&uacute;s quiere que usted testifique, las cuales se relacionan con sus motivos; y c&oacute;mo puede testificar eficazmente, lo cual implica reconocer y utilizar ciertos m&eacute;todos.</p>

</div>

<p>&nbsp;</p>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ OCHO RAZONES POR LAS QUE JES&Uacute;S QUIERE QUE USTED TESTIFIQUE</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p>Perm&iacute;tame citarle brevemente ocho razones por las que Dios desea que todos los creyentes compartan su fe con otras personas.</p>

<p><strong>Primero</strong>, cuando testifica, usted glorifica a Dios. Jes&uacute;s dice en San Juan 15:8: &ldquo;En esto es glorificado mi Padre, en que llev&eacute;is mucho fruto, y se&aacute;is as&iacute; mis disc&iacute;pulos.&rdquo;</p>

<p><strong>Segundo</strong>, el amor de Cristo nos impulsa a compartir nuestra fe. En las palabras del ap&oacute;stol Pablo, &ldquo;El amor de Cristo nos constri&ntilde;e.&rdquo; Si usted ha experimentado el amor del Se&ntilde;or Jesucristo, tambi&eacute;n querr&aacute; present&aacute;rselo a otros.</p>

<p><strong><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc6-3.png" style="float:right; width:30%" />Tercero</strong>, compartir su fe es un mandato directo de Jesucristo. &Eacute;l dice: &ldquo;Venid en pos de m&iacute;, y os har&eacute; pescadores de hombres.&rdquo; Y, &ldquo;no me elegisteis vosotros a m&iacute;, sino que yo os eleg&iacute; a vosotros, y os he puesto para que vay&aacute;is y llev&eacute;is fruto, y vuestro fruto permanezca.&rdquo;</p>

<p><strong>Cuarto</strong>, las personas sin Cristo est&aacute;n perdidas. Jes&uacute;s dice: &ldquo;Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por m&iacute;.&rdquo; La Palabra de Dios declara enf&aacute;ticamente: &ldquo;Y en ning&uacute;n otro hay salvaci&oacute;n; porque no hay otro nombre bajo el cielo, dado a los hombres, en que podamos ser salvos.&rdquo;</p>

<p><strong>Quinto</strong>, Dios quiere que usted d&eacute; testimonio de Jesucristo a causa de los beneficios que &Eacute;l ofrece a aquellos que reciben a Cristo. Cuando usted habla a otros de Cristo, &eacute;stos son hechos hijos de Dios, sus cuerpos se hacen templos de Dios; todos sus pecados son perdonados - &iexcl;pasados, presentes y futuros! Ellos comienzan a experimentar la paz y el amor de Dios; reciben la gu&iacute;a y el prop&oacute;sito de Dios para su vida; y obtienen la seguridad de la vida eterna.</p>

<p><strong>Sexto</strong>, Dios quiere que usted testifique de los beneficios que &Eacute;l otorga a los que testifican. Testificar estimula su crecimiento espiritual. Testificar lo lleva a orar y estudiar la Palabra de Dios y lo anima a depender m&aacute;s de Cristo. Cuando testifica en el poder del Esp&iacute;ritu Santo, usted siembra gozo y paz. De acuerdo a la ley de la siembra y la cosecha, usted siempre cosechar&aacute; lo que ha sembrado y a&uacute;n m&aacute;s. Por ejemplo, si siembra amor, cosechar&aacute; amor. Si siembra gozo, cosechar&aacute; gozo. Si siembra paz, cosechar&aacute; paz. Su cosecha siempre ser&aacute; mayor que la semilla sembrada.</p>

<p><strong>S&eacute;ptimo</strong>, Dios quiere que usted testifique para experimentar el privilegio y gran honor de representar a Jesucristo en el mundo. En su Segunda Carta a los Corintios, el ap&oacute;stol Pablo escribi&oacute;: &ldquo;Somos embajadores en nombre de Cristo, como si Dios rogase por medio de nosotros; os rogamos en nombre de Cristo: Reconciliaos con Dios.&rdquo;</p>

<p>La mayor&iacute;a de las personas consideran un alto honor el servir como un embajador de la m&aacute;xima autoridad de su pa&iacute;s - el presidente o el rey - &iexcl;pero como creyente en Cristo, usted es un embajador para el Rey de reyes y Se&ntilde;or de se&ntilde;ores!</p>

<p><strong>Octavo</strong>, Dios quiere que d&eacute; testimonio porque usted tiene al Esp&iacute;ritu Santo que le provee el poder necesario para ello. Jes&uacute;s dice: &ldquo;Recibir&eacute;is poder, cuando haya venido sobre vosotros el Esp&iacute;ritu Santo, y me ser&eacute;is testigos en Jerusal&eacute;n, en toda Judea, en Samaria, y hasta lo &uacute;ltimo de la tierra.&rdquo; Fallar al no dar testimonio de Cristo, es negar el derecho del Esp&iacute;ritu Santo de capacitarlo y usarlo para llevar a otros a nuestro Salvador.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ &iquest;C&Oacute;MO PUEDE USTED TESTIFICAR EFICAZMENTE?</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p>&iquest;Qu&eacute; m&eacute;todos le ser&aacute;n de ayuda en comunicar su fe adecuadamente?</p>

<p>Como ya he indicado, muchos cristianos consagrados fracasan miserablemente en sus esfuerzos de llevar a otros a Cristo, sencillamente porque no saben c&oacute;mo hacerlo.</p>

<p>El saber c&oacute;mo, es lo que con frecuencia hace la diferencia entre un testimonio efectivo y otro infructuoso. Antes de hablarle a otros de Jesucristo, usted debe:</p>

<ol>
	<li class="bible">Saber que usted mismo es cristiano.</li>
	<li class="bible">Conocer personalmente el ministerio capacitador del Esp&iacute;ritu Santo en su vida.</li>
	<li class="bible">Saber c&oacute;mo presentar la esencia destilada del Evangelio para que aqu&eacute;llos que le escuchan puedan tomar una decisi&oacute;n inteligente respecto a Cristo como su Salvador y Se&ntilde;or.</li>
</ol>

<p>Por muchos a&ntilde;os ya, en nuestros varios cursos de capacitaci&oacute;n para evangelizar, les pedimos a los participantes que nos ayuden a elaborar una lista con todo lo que consideran que una persona debe saber para tomar su decisi&oacute;n por Cristo.</p>

<p>Generalmente se anotaban en un pizarr&oacute;n entre veinticinco y cincuenta sugerencias. Entre otros la lista inclu&iacute;a con frecuencia los siguientes puntos:</p>

<ul>
	<li>Dios nos ama.</li>
	<li>Las personas son pecadoras.</li>
	<li>Las personas est&aacute;n perdidas.</li>
	<li>Dios nos ama tanto que &Eacute;l dio a Su Hijo.</li>
	<li>Cristo muri&oacute; por nuestros pecados.</li>
	<li>Cristo se levant&oacute; de la muerte.</li>
	<li>Cristo quiere entrar a todas las vidas.</li>
	<li>Nosotros tenemos que arrepentirnos.</li>
	<li>Nosotros tenemos que nacer de nuevo.</li>
	<li>Nosotros tenemos que recibir a Cristo.</li>
	<li>A todos los que reciben a Jes&uacute;s, Dios les da la potestad de ser hechos Sus hijos.</li>
	<li>Y por &uacute;ltimo, por gracia hemos sido salvados por medio de la fe</li>
</ul>

<p>Despu&eacute;s que las sugerencias parec&iacute;an agotarse, le ped&iacute;amos a cada participante que leyera junto con nosotros una presentaci&oacute;n del Evangelio llamada &ldquo;Las Cuatro Leyes Espirituales&rdquo;, y que nos ayudar&aacute; a eliminar cada punto escrito en el pizarr&oacute;n, siempre que estuviera relacionado con la &ldquo;Ley Uno&rdquo;. Estos puntos eran entonces borrados del pizarr&oacute;n. Luego continu&aacute;bamos con las Leyes Dos, Tres y Cuatro, siguiendo el mismo procedimiento. Al llegar al final, el pizarr&oacute;n quedaba siempre vac&iacute;o. Podemos decir que la esencia destilada del Evangelio est&aacute; contenida en el folleto de Las Cuatro Leyes Espirituales.</p>

<p>Originalmente Las Cuatro Leyes Espirituales, se escribieron s&oacute;lo para nuestros coordinadores, a quienes se les pidi&oacute; que las memorizaran como una herramienta de evangelizaci&oacute;n. Como resultado, la cantidad de personas que recibieron a Cristo se increment&oacute; dram&aacute;ticamente.</p>

<p>El contenido de las Cuatro Leyes Espirituales comenz&oacute; a madurar en mi pensamiento durante la capacitaci&oacute;n de coordinadores en el verano de 1956, en un momento en que el n&uacute;mero de nuestros coordinadores no alcanzaba los cincuenta.</p>

<p>Uno de los oradores en nuestra capacitaci&oacute;n de coordinadores de ese a&ntilde;o, era un hombre de negocios cristiano y destacado consultor de ventas. El enfatiz&oacute;, que para tener &eacute;xito en las ventas, una persona debe desarrollar una presentaci&oacute;n clara, sencilla y comprensible que pueda ser usada una y otra vez. El nos advirti&oacute; tambi&eacute;n que al hacer siempre la misma presentaci&oacute;n, se llega a generar cierta fatiga; como resultado se cambia la presentaci&oacute;n e inevitablemente se pierde la efectividad.</p>

<p>Despu&eacute;s compar&oacute; al cristiano que testifica con el vendedor secular. Para ser eficaz al comunicar nuestra fe en Cristo, enfatiz&oacute;, debemos desarrollar una presentaci&oacute;n sencilla, comprensible y razonable del Evangelio. Algo que podamos compartir con todos. Cuanto m&aacute;s y mejor se comunique esta sencilla presentaci&oacute;n, m&aacute;s fruct&iacute;fero ser&aacute; su testimonio por Cristo.</p>

<p>&Eacute;l ilustr&oacute; los puntos m&aacute;s sobresalientes mencionando a varios cristianos muy conocidos, quienes tienen sus propias presentaciones especiales. Luego apunt&oacute; hacia m&iacute;, diciendo: &ldquo;Bill Bright piensa que tiene un mensaje especial para cada uno de los diferentes grupos de estudiantes, profesionales, presos y obreros con quienes &eacute;l trabaja. Sin embargo, aunque nunca lo o&iacute; hablar, puedo asegurar que &eacute;l tiene un mensaje &uacute;nico para todos. B&aacute;sicamente, &eacute;l les dice a todos lo mismo.&rdquo;</p>

<p>Decir que me opuse a tal insinuaci&oacute;n, es decir poco. Cuanto m&aacute;s hablaba aquel orador, m&aacute;s me enojaba. Me molestaba la inferencia de que yo o cualquier otro que deseaba servir al Se&ntilde;or con sinceridad, no estuviera guiado por el Esp&iacute;ritu Santo como para hablar con originalidad en cada caso y a cada quien. Adem&aacute;s, me molestaba que me usara como ejemplo delante del resto de los coordinadores.</p>

<p>Cuando estaba finalizando su presentaci&oacute;n y yo estaba tratando de restaurar mis heridas, de las cuales la m&aacute;s seria era contra mi ego, comenc&eacute; a recordar con m&aacute;s exactitud lo que le ense&ntilde;aba a otras personas. Esa tarde escrib&iacute; mi presentaci&oacute;n b&aacute;sica y para mi sorpresa, descubr&iacute; que mi amigo estaba en lo correcto. Sin darme cuenta, hab&iacute;a estado ense&ntilde;ando b&aacute;sicamente el mismo mensaje, con peque&ntilde;as variaciones en cada caso. Lo que escrib&iacute; esa tarde y pul&iacute; despu&eacute;s, es lo que ahora se conoce como &ldquo;El plan de Dios para su vida&rdquo;, una presentaci&oacute;n de veinte minutos sobre qui&eacute;n es Jesucristo, sus aseveraciones, por qu&eacute; vino y c&oacute;mo conocerlo personalmente.</p>

<p>Le ped&iacute; a cada coordinador en nuestro movimiento que lo memorizara y todos comenzamos a usarlo en nuestra evangelizaci&oacute;n de persona a persona. Durante el siguiente a&ntilde;o y conforme nos concentramos en comunicar este sencillo mensaje, en total dependencia del Esp&iacute;ritu Santo y de Su poder, nuestro ministerio se multiplic&oacute; cien por ciento.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc6-4.png" style="width:100%" /></p>

<p>El &ldquo;Plan de Dios&rdquo; fue nuestro primer material metodol&oacute;gico por escrito, es decir, un material que explicaba sencilla y espec&iacute;ficamente c&oacute;mo una persona puede alcanzar una meta deseada, y tambi&eacute;n c&oacute;mo &eacute;l o ella pueden, a su vez, ayudar a otros a alcanzar esa misma meta. El enfoque en los m&eacute;todos, es uno de los m&aacute;s necesarios y poderosos en la vida y el testimonio del cristiano. La mayor&iacute;a de los no cristianos no necesitan que se les convenza de que deber&iacute;an ser cristianos. En vez de eso, necesitan que se les muestre c&oacute;mo serlo.</p>

<p>Aunque el &ldquo;Plan de Dios&rdquo; era muy eficaz, sentimos la necesidad de contar con una versi&oacute;n m&aacute;s breve. Prepar&eacute; entonces, un bosquejo condensado por completo, con los mismos vers&iacute;culos b&iacute;blicos y los diagramas. Todos los coordinadores lo memorizaron. Conforme m&aacute;s y m&aacute;s personas se en listaban en nuestro programa de capacitaci&oacute;n, pronto se not&oacute; que necesit&aacute;bamos disponer de esa misma presentaci&oacute;n, pero en forma escrita.</p>

<p>Como resultado, naci&oacute; el folleto &ldquo;Las Cuatro Leyes Espirituales.&rdquo;</p>

<p>Por supuesto que no queremos decir que el mensaje de las Cuatro Leyes Espirituales sea el &uacute;nico m&eacute;todo para llevar a otros a Cristo, ni siquiera que es el mejor. Lo que s&iacute; sabemos es que literalmente millones de personas han recibido a Cristo, a trav&eacute;s de la presentaci&oacute;n sencilla y directa del Evangelio, seg&uacute;n se presenta en este folleto. De acuerdo a nuestros c&aacute;lculos, m&aacute;s de un mill&oacute;n de copias han sido distribuidas en los idiomas m&aacute;s importantes del mundo.</p>

<p>Muchos relatos han llamado mi atenci&oacute;n sobre la efectividad de las Cuatro Leyes Espirituales. Recuerdo por ejemplo, la experiencia de una iglesia, cuyo pastor principal hab&iacute;a venido a nuestra oficina en busca de capacitaci&oacute;n, y quien estaba muy emocionado por el uso de las Cuatro Leyes Espirituales. Al regresar a casa, quiso compartir su entusiasmo con la iglesia y con su co-pastor.</p>

<p>Su co-pastor no se mostr&oacute; muy impresionado por el folleto. Para comenzar no le gustaban los panfletos, y &eacute;ste se ve&iacute;a como cualquier otro. As&iacute; que lo arroj&oacute; sobre su escritorio y ni siquiera se molest&oacute; en leerlo.</p>

<p>Algunos d&iacute;as m&aacute;s tarde, una funcionaria de la ciudad vino a inspeccionar las instalaciones de la iglesia. Cuando ya se retiraba despu&eacute;s de finalizar su inspecci&oacute;n, de pronto, el co-pastor se dio cuenta de que no le hab&iacute;a hablado de Cristo. &Eacute;l mir&oacute; a su alrededor r&aacute;pidamente y lo &uacute;nico que vio fue el folleto de las Cuatro Leyes Espirituales, que hab&iacute;a puesto a un lado con disgusto algunos d&iacute;as antes. Se lo dio y le dijo, &ldquo;lea esto&rdquo;, refiri&eacute;ndose a que lo leyera al llegar a su casa.</p>

<p>Sin embargo, ella no lo entendi&oacute; bien, y comenz&oacute; a leer el folleto en voz alta en su presencia. Ley&oacute; cada palabra, y cuando ley&oacute; la &ldquo;Cuarta Ley&rdquo;, l&aacute;grimas surcaban sus mejillas. Al llegar a la oraci&oacute;n, or&oacute; en voz alta, gui&aacute;ndose a s&iacute; misma a Cristo. Con este solo episodio, el co-pastor qued&oacute; tan impresionado que vino a Arrowhead Springs, para descubrir por experiencia propia, c&oacute;mo pod&iacute;a ser un mejor testigo de Jesucristo, por medio de la capacitaci&oacute;n y el uso del folleto que presenta &ldquo;Las Cuatro Leyes Espirituales.&rdquo;</p>

<p>Otra experiencia conmovedora demuestra la efectividad del folleto. Hab&iacute;a un hombre quien era grandemente admirado en su pueblo, pero no era cristiano. En efecto, era conocido como el esc&eacute;ptico del lugar, porque nunca respondi&oacute; positivamente a las muchas personas que le testificaron personalmente de Jesucristo.</p>

<p>Se hab&iacute;a hecho amigo de los padres de un amigo cristiano, el cual se sent&iacute;a especialmente preocupado por su salvaci&oacute;n. Despu&eacute;s de obtener un folleto de Las Cuatro Leyes Espirituales, este amigo decidi&oacute; visitar al esc&eacute;ptico y le&eacute;rselo. Cuando finaliz&oacute; su lectura, le pregunt&oacute;:</p>

<p>&laquo;&iquest;Entiendes lo que te le&iacute;?&raquo;</p>

<p>Aquel esc&eacute;ptico respondi&oacute;: &ldquo;S&iacute;.&rdquo;</p>

<p>&ldquo;&iquest;Hay algo que te impide recibir a Cristo?&rdquo; &ldquo;No.&rdquo; -respondi&oacute;.</p>

<p>Entonces los dos hombres se arrodillaron juntos y oraron. El &ldquo;esc&eacute;ptico&rdquo; invit&oacute; a Cristo a su vida para que fuera su Salvador y Se&ntilde;or.</p>

<p>Cuando se levantaron, mi amigo se regocijaba con este hombre, quien entonces lo dej&oacute; estupefacto con esta pregunta: &ldquo;&iquest;Es esto lo que t&uacute; y muchos otros cristianos han intentado decirme por a&ntilde;os?&rdquo; &ldquo;S&iacute;.&rdquo;</p>

<p>&ldquo;Bueno&rdquo;-continu&oacute; este nuevo hermano en Cristo- &ldquo;&iquest;por qu&eacute; no me lo dijeron? Ning&uacute;n hombre ser&iacute;a tan tonto de no recibir a Cristo, si realmente entiende lo que esto significa.&rdquo;</p>

<p>El Evangelio, tal como est&aacute; contenido en Las Cuatro Leyes Espirituales, hab&iacute;a roto la barrera del escepticismo y la indiferencia, de modo que este hombre recibi&oacute; a Cristo como una nueva manera de vivir.</p>

<p><strong>Primero</strong>, comience cada d&iacute;a con una oraci&oacute;n, pidi&eacute;ndole al Esp&iacute;ritu Santo que lo capacite y lo gu&iacute;e a aquellas personas cuyos corazones &Eacute;l ha preparado.</p>

<p><strong>Segundo</strong>, relaci&oacute;nese con las personas de una forma amorosa, natural y personal. Evite ser mec&aacute;nico. Todos responden al amor. Conforme usted camina en amor, aquellos a los que les est&aacute; hablando de Cristo, recibir&aacute;n la confirmaci&oacute;n del Esp&iacute;ritu de Dios, de que usted es sincero; de que no est&aacute; &uacute;nicamente tratando de hacer prevalecer un argumento o promoviendo una causa y que est&aacute; dedicando valioso tiempo para hablarles, porque verdaderamente los ama con el amor de Dios.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc6-6.png" style="float:right; width:50%" />No todos estar&aacute;n preparados para recibir a Cristo, o para dar una respuesta positiva. Algunos m&aacute;s bien pueden mostrar antagonismo. Dios tal vez querr&aacute; que usted siembre la semilla, o querr&aacute; usarlo como un instrumento en la cosecha. Sea cual fuere el caso, conf&iacute;e y perm&iacute;tale a &Eacute;l hacer Su obra a trav&eacute;s suyo</p>

<p>Recuerde, as&iacute; como no todos los frutos de un huerto son cosechados al mismo tiempo, algunas personas estar&aacute;n &ldquo;maduros&rdquo; para la cosecha espiritual y otros todav&iacute;a estar&aacute;n &ldquo;verdes&rdquo; - o sea que no estar&aacute;n listos en ese momento para responder al Evangelio. Considere toda conversaci&oacute;n evangel&iacute;stica como un gran privilegio y como una oportunidad, no como una responsabilidad legalista. Piense en el gran amor de Dios, en lo que significa para usted conocerlo y en lo que significar&aacute; para otros el recibir a Cristo. Haga que el compartir su fe con otros, se constituya en un verdadero h&aacute;bito en su vida.</p>

<p><strong>Tercero</strong>, use siempre una presentaci&oacute;n del Evangelio que sea clara y sencilla. Hay muchas ventajas que resultan del uso de una herramienta como Las Cuatro Leyes Espirituales. Enumerar&eacute; algunas de ellas:</p>

<ol>
	<li>Le permite iniciar una conversaci&oacute;n en forma f&aacute;cil y natural.</li>
	<li>Comienza con una declaraci&oacute;n positiva - &ldquo;Dios le ama y tiene un plan maravilloso para su vida.&rdquo;</li>
	<li>Presenta el Evangelio y las aseveraciones de Jesucristo, de forma clara y sencilla.</li>
	<li>Le permite tener confianza al testificar, porque sabe lo que va a decir y c&oacute;mo tiene que decirlo.</li>
	<li>Le permite estar preparado en todo tiempo y ce&ntilde;irse al tema, sin desviarse ni salirse por la tangente.</li>
	<li>Hace posible que usted sea breve y que vaya directamente al grano.</li>
	<li>Le permite guiar a las personas a una decisi&oacute;n personal por medio de una oraci&oacute;n sugerida ya preparada.</li>
	<li>Le ofrece consejos para el crecimiento, incluyendo la importancia de la participaci&oacute;n en la iglesia.</li>
	<li>Finalmente y lo que es especialmente importante: esta es una &ldquo;herramienta transferible.&rdquo; Esto significa que aqu&eacute;llos a quienes se les presenta a Cristo, pueden ser animados y capacitados para que, a su vez, gu&iacute;en a otros al Se&ntilde;or.</li>
</ol>

<p>El ap&oacute;stol Pablo exhort&oacute; a Timoteo, su joven hijo en la fe, dici&eacute;ndole: &ldquo;Lo que has o&iacute;do de m&iacute; ante muchos testigos, esto encarga a hombres fieles que sean id&oacute;neos para ense&ntilde;ar tambi&eacute;n a otros.&rdquo;</p>

<p>Las Cuatro Leyes Espirituales son una herramienta transferible tan sencilla, que permite que los que reciben a Cristo en sus vidas vayan inmediatamente a sus amigos y seres queridos, para hablarles de su nueva fe en Cristo. Al mismo tiempo los capacita para mostrar a sus amigos y seres queridos, c&oacute;mo ellos tambi&eacute;n pueden hacer su propio compromiso con Cristo.</p>

<div class="block-quote">&laquo;&iquest;Qu&eacute; es lo que le dices a una persona cuando intentas llevarla a Cristo?&raquo;</div>

<p>Un l&iacute;der cristiano y te&oacute;logo sobresaliente, bastante conocido, me hablaba de su sentimiento de frustraci&oacute;n por su poca efectividad y por la falta de fruto en su testimonio por Cristo.</p>

<p>Le pregunt&eacute;: &laquo;&iquest;Qu&eacute; es lo que le dices a una persona cuando intentas llevarla a Cristo?&raquo;</p>

<p>Me explic&oacute; su presentaci&oacute;n, la cual era muy larga y complicada. La gran cantidad de vers&iacute;culos b&iacute;blicos que usaba confund&iacute;an a la mayor&iacute;a de las personas y les imped&iacute;a tomar una decisi&oacute;n consciente y apropiada.</p>

<p>Lo invit&eacute; a usar la presentaci&oacute;n contenida en el folleto de las Cuatro Leyes Espirituales en los pr&oacute;ximos treinta d&iacute;as y que me informara de los resultados al finalizar ese per&iacute;odo. Cuando lo vi dos semanas despu&eacute;s, se ve&iacute;a muy emocionado y gozoso.</p>

<p>Me dijo: &ldquo;Tan s&oacute;lo ley&eacute;ndoles el folleto a otros, he visto m&aacute;s personas venir a Cristo en las &uacute;ltimas dos semanas, delo que hab&iacute;a visto en muchos meses. &iexcl;Es incre&iacute;ble!&rdquo;</p>

<p>Podr&iacute;a mencionar el caso de innumerables cartas e informes de personas que se han beneficiado al recibir capacitaci&oacute;n sobre c&oacute;mo usar esta sencilla presentaci&oacute;n.</p>

<p>Una mujer que, junto a su esposo, hab&iacute;a servido como misionera en &Aacute;frica por muchos a&ntilde;os me escribi&oacute; lo siguiente: &ldquo;Deber&iacute;a haber visto la transformaci&oacute;n en mi esposo, cuando regres&oacute; despu&eacute;s de asistir a uno de sus seminarios de capacitaci&oacute;n. &Eacute;l quer&iacute;a compartir el folleto de las Cuatro Leyes Espirituales con toda persona a su alcance. &iexcl;Inclusive lo comparti&oacute; con otra persona en una piscina con el agua hasta el cuello! Lo mejor de todo es que a&uacute;n contin&uacute;a haci&eacute;ndolo.&rdquo;</p>

<p>Otro m&aacute;s me dijo: &ldquo;Al principio ten&iacute;a temor, pero el Se&ntilde;or ha cambiado mi actitud, y ahora quiero salir a testificar. Doy gracias a Dios con todo mi coraz&oacute;n por este cambio.&rdquo;</p>

<p>Sin embargo, aun una persona controlada por el Esp&iacute;ritu Santo, utilizando una herramienta comprobada y confiable, puede encontrar oposici&oacute;n al hablar de Cristo con otros. Una de las barreras m&aacute;s dif&iacute;ciles de vencer en la evangelizaci&oacute;n personal es precisamente el dar el primer paso, o sea comenzar. No importa, qui&eacute;n sea usted ni donde se encuentre, siempre habr&aacute; oportunidades preparadas para usted.</p>

<p>Reconozca que si se encuentra a solas con otra persona en cualquier lugar por m&aacute;s de unos minutos, esa es realmente una &ldquo;cita divina&rdquo; y una respuesta a su oraci&oacute;n.</p>

<div class="block-quote">&ldquo;Al principio ten&iacute;a temor, pero el Se&ntilde;or ha cambiado mi actitud, y ahora quiero salir a testificar. Doy gracias a Dios con todo mi coraz&oacute;n por este cambio.&rdquo;</div>

<p>Adem&aacute;s de hablarles de Cristo a los estudiantes, ejecutivos y lacios, tanto personalmente como en grupos grandes y peque&ntilde;os, yo le testifico regularmente a porteros, operadores de ascensores, camareras en los hoteles, taxistas y a personas de otras ocupaciones. Por ejemplo, al viajar en un avi&oacute;n, frecuentemente es f&aacute;cil entablar conversaci&oacute;n con la azafata o con el compa&ntilde;ero de asiento, si es que se tiene a la mano una Biblia, un folleto de las Cuatro Leyes Espirituales, u otra clase de literatura cristiana.</p>

<p>Despu&eacute;s de cualquier reuni&oacute;n, ya sea de un servicio en la iglesia, en un estudio b&iacute;blico, en una reuni&oacute;n de evangelismo estudiantil u otra reuni&oacute;n similar, usted puede conocer a diferentes personas. Despu&eacute;s de presentarse y de intercambiar saludos para entrar en confianza, usted puede continuar haciendo una o m&aacute;s de las siguientes preguntas en la forma m&aacute;s natural posible.</p>

<p>&ldquo;&iquest;Qu&eacute; le pareci&oacute; la presentaci&oacute;n (o mensaje)?&rdquo; &ldquo;&iquest;Tiene alg&uacute;n significado para usted?&rdquo; &ldquo;</p>

<p>&iquest;Ha hecho el maravilloso descubrimiento de conocer a Cristo personalmente?&rdquo; &ldquo;&iquest;Le gustar&iacute;a hacerlo?&rdquo;</p>

<p>Luego pregunte: &laquo;&iquest;Ha o&iacute;do acerca de las Cuatro Leyes Espirituales?&rdquo; A continuaci&oacute;n l&eacute;ale el folleto. Si las personas indican que ya han o&iacute;do acerca de las Cuatro Leyes, p&iacute;dales su opini&oacute;n, repase el folleto y d&eacute;les la oportunidad de orar para recibir a Cristo, si es que todav&iacute;a no lo han hecho.</p>

<p>Hay varias formas muy efectivas para establecer contacto con otra persona.</p>

<p>Despu&eacute;s de un saludo cordial y amistoso, puede decir:</p>

<div class="quote-left">Este folleto es uno de los que m&aacute;s se han le&iacute;do en toda la historia - se han distribuido ya m&aacute;s de mil millones de copias en los idiomas m&aacute;s importantes del mundo. &iquest;Ha o&iacute;do acerca de las Cuatro Leyes Espirituales?</div>

<p>O tal vez podr&iacute;a decir:</p>

<div class="quote-right">Recientemente, un amigo m&iacute;o me d&iacute;o este peque&ntilde;o folleto que realmente fue de mucho inter&eacute;s y ayuda para m&iacute;. Me gustar&iacute;a compartirlo con usted. &iquest;Ha o&iacute;do acerca de las Cuatro Leyes Espirituales?</div>

<p>Otra opci&oacute;n podr&iacute;a ser esta:</p>

<div class="quote-left">El contenido de este folleto ha ayudado a cambiar las vidas de millones de personas. Contiene verdades espirituales que creo que le interesar&aacute;n mucho. &iquest;Le gustar&iacute;a leerlas y darme su opini&oacute;n?</div>

<p>Tambi&eacute;n podr&iacute;a intentarlo de esta manera:</p>

<div class="quote-right">Si usted se muriera hoy, &iquest;tiene la seguridad de que ir&iacute;a al cielo?</div>

<p>Si la respuesta es s&iacute;, pregunte:</p>

<div class="quote-left">&iquest;En qu&eacute; se basa para estar seguro de que ir&aacute; al cielo? Este peque&ntilde;o folleto, las Cuatro Leyes Espirituales, le ayudar&aacute; a tener la certeza de que cuando muera, ir&aacute; al cielo.</div>

<p>Este enfoque directo es m&aacute;s apropiado cuando s&oacute;lo cuenta con unos pocos momentos con una persona. Si dispone de m&aacute;s tiempo, ser&iacute;a m&aacute;s &uacute;til que tomara algunos minutos para establecer un clima de mayor confianza, compartiendo algunas cosas de inter&eacute;s personal y pregunt&aacute;ndole a la persona por sus propios intereses, sus negocios, su profesi&oacute;n o su familia. Luego puede explicar que usted es cristiano y que ha descubierto un folleto extraordinario, que le ha sido de gran ayuda y que le gustar&iacute;a mostr&aacute;rselo. Luego, pregunte, &ldquo;&iquest;Ha o&iacute;do alguna vez acerca de las Cuatro Leyes Espirituales?&rdquo; Demuestre amor cristiano al hacer la presentaci&oacute;n. Sea espont&aacute;neo, amigable, amable y hable con confianza. Usted no necesita impresionar a las personas con su inteligencia, pero tampoco deber&iacute;a usar un enfoque carente de entusiasmo, vacilante, y negativo que sugiera, &ldquo;No creo que le interese hacerse cristiano, &iquest;no es as&iacute;?&rdquo;</p>

<p>Cuando presente las Cuatro Leyes Espirituales, sencillamente lea el folleto. Por lo general, debe leerlo en voz alta, sosteni&eacute;ndolo de forma que la persona pueda seguir la lectura juntamente con usted. Tambi&eacute;n es &uacute;til usar un l&aacute;piz o algo parecido para se&ntilde;alar las l&iacute;neas y las palabras que est&aacute; leyendo, para garantizar una mayor concentraci&oacute;n.</p>

<p>Algunas veces, el Esp&iacute;ritu Santo lo guiar&aacute; a detenerse y explicar algo que tal vez no resulte claro, o a&ntilde;adir una ilustraci&oacute;n personal. Sin embargo, es m&aacute;s efectivo leer todo el folleto antes de detenerse para explicar o para responder preguntas. Si la persona le hace preguntas, puede decirle: &ldquo;tengamos en mente esa pregunta para responderla cuando finalicemos de leer todo el folleto.&rdquo; Por supuesto, &iexcl;no se olvide de responder esa pregunta despu&eacute;s!</p>

<p>Hace alg&uacute;n tiempo habl&eacute; a un grupo de pastores en Dallas. Un capell&aacute;n universitario se mostr&oacute; esc&eacute;ptico sobre c&oacute;mo se podr&iacute;a presentar un enfoque tan sencillo como las Cuatro Leyes Espirituales, a los estudiantes universitarios. El me pidi&oacute; que lo acompa&ntilde;ara a una universidad cercana, para que le demostrara c&oacute;mo usar el folleto de las Cuatro Leyes Espirituales con estudiantes no cristianos. El logr&oacute; reunir aproximadamente una docena de estudiantes, la mayor&iacute;a de los cuales ya eran cristianos.</p>

<p>Yo le di una copia del folleto de las Cuatro Leyes Espirituales a cada uno y les ped&iacute; que siguieran mi lectura en silencio, mientras yo le&iacute;a el folleto en voz alta.</p>

<p>Aunque a trav&eacute;s de los a&ntilde;os hab&iacute;a presentado a Cristo a miles de estudiantes y profesionales en sesiones de consejer&iacute;a personal, soy una persona reservada y no siempre me resulta f&aacute;cil testificar. Mientras estaba ley&eacute;ndoles en voz alta el folleto a los estudiantes, empec&eacute; a recibir toda clase de impresiones negativas del diablo, quien estaba intentando desanimarme y sembrar dudas en mi mente como, por ejemplo, &ldquo;estos estudiantes se reir&aacute;n de ti. Ellos son demasiado inteligentes para responder a una presentaci&oacute;n tan sencilla. T&uacute; necesitas un enfoque m&aacute;s intelectual. No prosigas; no seas fan&aacute;tico. Estos estudiantes se ir&aacute;n. Ellos pensar&aacute;n que est&aacute;s loco.&rdquo;</p>

<p>Pero como soy libre del poder de Satan&aacute;s cuando obedezco y conf&iacute;o en el Se&ntilde;or, pude decir: &ldquo;Mayor es &Eacute;l (Cristo) que est&aacute; en m&iacute;, que el que est&aacute; en el mundo (Satan&aacute;s).&rdquo;</p>

<p>As&iacute; que continu&eacute; leyendo, con la seguridad de que Dios honrar&iacute;a esta presentaci&oacute;n tal como lo hab&iacute;a hecho en miles de otras ocasiones, porque &Eacute;l ha prometido honrar Su Palabra. Cuando llegu&eacute; a la oraci&oacute;n, de pronto me pareci&oacute; que un coro de voces me dec&iacute;a: &ldquo;No leer&aacute;s esta oraci&oacute;n ni har&aacute;s el rid&iacute;culo delante de estos estudiantes inteligentes, &iquest;no es cierto?&rdquo; Pero le&iacute; la oraci&oacute;n, y luego dije: &ldquo;Si esta oraci&oacute;n expresa el deseo de su coraz&oacute;n, ore conmigo en silencio. Haga suya esta oraci&oacute;n.&rdquo;</p>

<p>Luego le&iacute; la oraci&oacute;n en voz alta por segunda vez. Cuando la finalic&eacute;, vi l&aacute;grimas desliz&aacute;ndose por las mejillas de una joven. Ella se acerc&oacute; para decirme que hab&iacute;a hecho esa oraci&oacute;n y que sab&iacute;a que el Se&ntilde;or Jes&uacute;s hab&iacute;a venido a vivir en su coraz&oacute;n. Luego, un joven recibi&oacute; a Cristo tambi&eacute;n. Antes de marcharme, el capell&aacute;n me present&oacute; a una joven que reci&eacute;n hab&iacute;a recibido a Cristo. Por lo que s&eacute;, todos los dem&aacute;s, excepto uno, eran cristianos. El que faltaba hab&iacute;a crecido ateo, pero fue muy discreto sobre lo que hab&iacute;a o&iacute;do y estaba tambi&eacute;n a punto de recibir a Cristo. Por medio de la sencilla lectura del Evangelio tal como est&aacute; presentado en el folleto de las Cuatro Leyes Espirituales, el Esp&iacute;ritu de Dios obr&oacute; en los corazones de estos j&oacute;venes y se&ntilde;oritas de una forma maravillosa. Esta es, con frecuencia, la experiencia de toda persona controlada por el Esp&iacute;ritu que comunica esta presentaci&oacute;n.</p>

<p>Generalmente se encuentra que la mayor&iacute;a de las personas est&aacute;n de acuerdo con las primeras &ldquo;tres leyes&rdquo; y es probable que no tengan muchas preguntas, a veces ninguna. Por lo mismo se debe proseguir con la &ldquo;Cuarta Ley&rdquo; con toda confianza.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc6-7.png" style="float:right; width:50%" />Cuando llegue a los dos c&iacute;rculos, uno representando la vida controlada por el &ldquo;yo&rdquo;, y el otro representando la vida controlada por Cristo, haga la pregunta que est&aacute; en el folleto: &iquest;Cu&aacute;l de estos dos c&iacute;rculos representa su vida?</p>

<p>Luego pregunte: &iquest;Cu&aacute;l de estos dos c&iacute;rculos le gustar&iacute;a que representara su vida?</p>

<p>En la mayor&iacute;a de los casos, la persona a quien le est&aacute; hablando responder&aacute; a la primera pregunta: &ldquo;El c&iacute;rculo de la izquierda&rdquo;, y a la segunda: &ldquo;El c&iacute;rculo de la derecha.&rdquo;</p>

<p>La obra del Esp&iacute;ritu Santo al producir una actitud de arrepentimiento en un no creyente, es una preparaci&oacute;n necesaria para recibir a Cristo. Este cambio de actitud resultar&aacute; en un cambio de conducta. Sin embargo, debe quedar claramente establecido que una persona no se hace cristiana porque se arrepiente, sino por el sencillo acto de recibir a Cristo por fe, como se explica en San Juan 1:12 y en Efesios 2.8-9</p>

<div class="quote-left">Mas a todos los que le recibieron, a los que creen en su nombre, les dio potestad de ser hechos hijos de Dios. Porque por gracias sois salvos por medio de la fe, y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se glor&iacute;e.</div>

<p>El siguiente punto fundamental cuando se presenta a Cristo, es ayudar a los que quieren recibirlo como su Salvador, a comprender exactamente qu&eacute; hacer. Conforme usted contin&uacute;a leyendo el folleto, explique c&oacute;mo recibir a Cristo.</p>

<p>Lea la oraci&oacute;n en voz alta y luego pregunte: &laquo;&iquest;Expresa esta oraci&oacute;n el deseo de su coraz&oacute;n?&raquo;</p>

<p>Si la respuesta es &ldquo;s&iacute;,&rdquo; diga, &ldquo;usted puede hacer esta oraci&oacute;n ahora mismo, si realmente entiende lo que significa y Cristo vendr&aacute; a su vida como &Eacute;l lo prometi&oacute;.</p>

<p>Luego haga una pausa para la oraci&oacute;n. Sugiera que si la persona desea orar en voz alta, usted puede orar con ella.</p>

<p>Si se produce un largo silencio, puede sugerir que la persona ore repitiendo, despu&eacute;s de usted, frase por frase. Sin embargo, sea sensible. Algunas personas desean hacer su propia oraci&oacute;n, en vez de una oraci&oacute;n sugerida. Si alguien desea orar en silencio, sugi&eacute;rale que diga &ldquo;Am&eacute;n&rdquo; al finalizar. Cuando diga &ldquo;Amen&rdquo;, ore en voz alta por el nuevo creyente.</p>

<p>Si la persona no hace un compromiso con Jesucristo despu&eacute;s de que le ha le&iacute;do el folleto completo, evite ofenderla. No trate de discutir ni presione a nadie a tomar una &ldquo;decisi&oacute;n&rdquo; por Cristo. Jes&uacute;s dice: &ldquo;Ninguno puede venir a m&iacute;, si el Padre que me envi&oacute; no le trajere.&rdquo;</p>

<p>Lo m&aacute;s importante no es lo que usted diga, sino lo que el Esp&iacute;ritu Santo haga a trav&eacute;s suyo. Usted y yo no tenemos la habilidad de llevar a alguien a Jesucristo por nuestro propio medio. Recuerde, el &eacute;xito en la evangelizaci&oacute;n es sencillamente tomar la iniciativa para presentar a Cristo en el poder del Esp&iacute;ritu Santo, y dejarle los resultados a Dios.</p>

<p>Sin embargo, usted puede tomar ciertos pasos para ayudar a la persona que no ora para recibir a Cristo, al llegar a la oraci&oacute;n en el folleto:</p>

<ol>
	<li>Mantenga siempre una actitud amorosa y positiva. Usted podr&iacute;a decir: &ldquo;probablemente querr&aacute; recibir a Jesucristo como su Salvador alg&uacute;n d&iacute;a. Perm&iacute;teme mostrarte lo que pasar&aacute; cuando invites a Cristo a venir a tu vida.&rdquo;</li>
	<li>Luego explique c&oacute;mo una persona puede tener seguridad de su salvaci&oacute;n, ley&eacute;ndole el resto del folleto.</li>
	<li>Si la persona responde positivamente, d&eacute;le otra oportunidad de recibir a Cristo, invit&aacute;ndola a orar con usted. Descubrir&aacute; que muchas personas estar&aacute;n listas para orar, cuando hayan le&iacute;do todo el folleto.</li>
</ol>

<p>Algunos querr&aacute;n orar en ese momento, mientras que otros preferir&aacute;n hacerlo despu&eacute;s, cuando comprendan mejor lo que significa recibir a Cristo. En ese caso:</p>

<ol>
	<li>Sugiera que la persona vuelva a leer el folleto m&aacute;s tarde y que en ese momento decida recibir a Cristo.</li>
	<li>P&iacute;dale a la persona que lo llame por tel&eacute;fono, tan pronto &eacute;l o ella reciba a Cristo. Muchas personas reciben solos al Salvador despu&eacute;s de que ha finalizado el tiempo de la entrevista de presentaci&oacute;n.</li>
</ol>

<p>En una ocasi&oacute;n compart&iacute; el folleto de las Cuatro Leyes Espirituales con un famoso general, quien estaba de acuerdo con su contenido, pero nunca hab&iacute;a recibido a Cristo. Quer&iacute;a hacerlo pero nunca hab&iacute;a dado ese paso. Me ofrec&iacute; para orar con &eacute;l, pero me dijo que preferir&iacute;a recibir a Cristo cuando estuviera solo. Le promet&iacute; orar por &eacute;l y me desped&iacute;.</p>

<p>A la ma&ntilde;ana siguiente lo llam&eacute; para preguntarle: &laquo;&iquest;Hizo esa oraci&oacute;n?&raquo;</p>

<p>&ldquo;Ciertamente lo hice,&rdquo; -respondi&oacute; con amabilidad y entusiasmo- &ldquo;tal como promet&iacute;.&rdquo;</p>

<p>Perm&iacute;tame recomendarle otros dos m&eacute;todos que podr&iacute;an ser muy &uacute;tiles.</p>

<p>Uno es compartir su propio testimonio personal y , seg&uacute;n el Esp&iacute;ritu Santo le gu&iacute;e, d&eacute;le a la persona a quien le est&aacute; compartiendo, otra oportunidad para recibir a Cristo. Otro m&eacute;todo es repasar el folleto, explic&aacute;ndolo claramente una ley a la vez y preguntando despu&eacute;s de cada ley, &ldquo;&iquest;Entiende? &iquest;Es claro esto?&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ GUIANDO A LOS NUEVOS CRISTIANOS A UNA SEGURIDAD PLENA</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p>Otra consideraci&oacute;n importante al compartir a Cristo con otros es la necesidad de guiar a los nuevos cristianos a tener plena seguridad de su fe en Cristo. Todo el material que en el folleto se encuentra despu&eacute;s de la oraci&oacute;n, est&aacute; especialmente dise&ntilde;ado para que pueda ayudar al nuevo cristiano a estar seguro de que &eacute;l o ella es un verdadero hijo de Dios.</p>

<p>Despu&eacute;s de que una persona ha orado, h&aacute;gale las preguntas que se encuentran en la p&aacute;gina &ldquo;once&rdquo; del folleto. &ldquo;&iquest;Recibi&oacute; a Cristo en su vida? De acuerdo a Su promesa de Apocalipsis 3:20, &iquest;d&oacute;nde est&aacute; &Eacute;l en este momento en relaci&oacute;n a usted?&rdquo;</p>

<p>Si la respuesta es: &ldquo;&Eacute;l est&aacute; en el mundo,&rdquo; o &ldquo;&Eacute;l est&aacute; en los cielos&rdquo;, formule la pregunta de nuevo, enfatizando &ldquo;..pero d&oacute;nde est&aacute; &Eacute;l en relaci&oacute;n a usted?&rdquo;</p>

<p>Explique que, de acuerdo a Apocalipsis 3:20, Cristo dijo que &Eacute;l entrar&iacute;a en nuestras vidas.</p>

<div class="quote-left">He aqu&iacute;, yo estoy a la puerta y llamo; si alguno oye mi voz y &laquo; abre la puerta, entrar&eacute; a &eacute;l, y cenar&eacute; con &eacute;l, y &eacute;l conmigo.</div>

<p>Luego, pregunte: &laquo;&iquest;Lo enga&ntilde;ar&iacute;a Cristo? &iquest;En qu&eacute; autoridad se basa para saber que Dios ha respondido su oraci&oacute;n?&raquo; Luego explique que nuestra autoridad es la fidelidad del mismo Dios y Su Palabra. Lean juntos 1 Juan 5:11-13.</p>

<div class="quote-right">Y este es el testimonio: que Dios nos ha dado vida eterna; y esta vida est&aacute; en su Hijo. El que tiene al Hijo tiene la vida; el que no tiene al Hijo de Dios no tiene la vida. Estas cosas os he escrito a vosotros que cre&eacute;is en el nombre del Hijo de Dios, para que sep&aacute;is que ten&eacute;is vida eterna, y para que cre&aacute;is en el nombre del Hijo de Dios.</div>

<p>Enfatice que podemos estar seguros de tener vida eterna en base a estas promesas de la Palabra inspirada de Dios.</p>

<p>Recientemente compart&iacute; el Evangelio utilizando Las Cuatro Leyes, con un hombre que recibi&oacute; a Cristo, pero que no ten&iacute;a la seguridad de su salvaci&oacute;n. Despu&eacute;s de leerle este pasaje en particular, le pregunt&eacute;: &laquo;&iquest;qu&eacute; pasar&iacute;a si usted muriera hoy?&raquo;</p>

<p>El contest&oacute;: &ldquo;Me temo que me ir&iacute;a al infierno.&rdquo;</p>

<p>Pero, al leerle el pasaje de 1 Juan varias veces, vi que sus ojos se llenaban de luz y que su rostro estaba radiante. El Esp&iacute;ritu Santo hab&iacute;a quebrado la resistencia que &eacute;l hab&iacute;a creado por cincuenta a&ntilde;os y finalmente, este hombre pudo ver la verdad de Dios y recibir a Cristo en su vida, por fe.</p>

<p>Siempre explique cu&aacute;n importante es la fe. Repase y explique el significado de Efesios 2:8,9. Advierta a la persona contra el peligro de depender de los sentimientos.</p>

<p>Una de las m&aacute;s grandes mentiras de Satan&aacute;s es que usted debe tener alguna clase de experiencia emocional al recibir a Cristo. Recuerde que la Palabra de Dios dice que debemos recibir a Cristo por fe y vivir por fe. Esto no excluye la importancia de las emociones, pero, de acuerdo al Evangelio seg&uacute;n San Juan 14:21, usted no debe buscar una experiencia emocional.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc6-8.png" style="width:100%" /></p>

<p>Tiene que vivir por fe y obedecer los mandamientos de Dios. El que tiene mis mandamientos y los guarda, &eacute;se es el que me ama.</p>

<p>Explique el dibujo del tren de la p&aacute;gina 12 del folleto, y la verdad que nos indica que la vida cristiana no debe vivirse de acuerdo a los sentimientos, sino de acuerdo a la fe en Dios y en Su Palabra. Estudie esta informaci&oacute;n cuidadosamente, y acl&aacute;resela siempre a la persona a quien le est&aacute; hablando de Cristo.</p>

<p>Tambi&eacute;n explique breve y claramente las cuatro cosas maravillosas que le han sucedido al nuevo cristiano, seg&uacute;n la lista que se encuentra en la p&aacute;gina 13 del folleto.</p>

<p>Cuando una persona, bas&aacute;ndose en la Palabra de Dios, diga estar segura de que Cristo est&aacute; en su vida, sugi&eacute;rale que cada uno de ustedes ore en voz alta, agradeciendo a Dios por lo que &Eacute;l ha hecho. El solo acto de agradecer a Dios, demuestra fe y a menudo contribuye a la seguridad de la salvaci&oacute;n.</p>

<div class="block-quote">Cuando una persona, bas&aacute;ndose en la Palabra de Dios, diga estar segura de que Cristo est&aacute; en su vida, sugi&eacute;rale que cada uno de ustedes ore en voz alta, agradeciendo a Dios por lo que &Eacute;l ha hecho. El solo acto de agradecer a Dios, demuestra fe y a menudo contribuye a la seguridad de la salvaci&oacute;n.</div>

<p>Contin&uacute;e d&aacute;ndole sugerencias para el crecimiento cristiano y sobre la importancia de participar activamente en una iglesia local, seg&uacute;n est&aacute; explicado en las p&aacute;ginas 14 y 15 del folleto &ldquo;Las Cuatro Leyes Espirituales.&rdquo;</p>

<p>No se puede dejar de enfatizar la importancia de discipular apropiadamente al nuevo cristiano. Usted debe estar seguro de anotar el nombre y la direcci&oacute;n de cada persona con la que ora para recibir a Cristo. Esto se debe hacer con tacto y sin ofender, si primero usted mismo le d&eacute; a esa persona su nombre y direcci&oacute;n.</p>

<p>Luego haga una cita para reunirse con el nuevo cristiano, para brindarle consejo espiritual y discipulado, si es posible, al d&iacute;a siguiente. De preferencia no deje pasar m&aacute;s de 48 horas antes de verse nuevamente con el nuevo cristiano.</p>

<p>Muchos reciben la seguridad de su salvaci&oacute;n tan s&oacute;lo leyendo y estudiando el material que les enviamos. Recuerdo a una nueva coordinadora de nuestra organizaci&oacute;n, quien se me acerc&oacute; para agradecerme por haberle enviado una serie de doce cartas de edificaci&oacute;n.</p>

<p>&ldquo;Despu&eacute;s de recibir a Cristo&rdquo;, dijo, &ldquo;ten&iacute;a serias dudas. Decid&iacute; que despu&eacute;s de todo no quer&iacute;a ser cristiana. Inclusive me sent&iacute;a molesta con usted y las cartas que me enviaba. Pero luego Dios us&oacute; sus cartas para responder a mis preguntas y para ayudarme a rendir mi vida a Cristo. Ahora he solicitado ser una coordinadora m&aacute;s de la Cruzada Estudiantil y Profesional para Cristo y ya he sido aceptada. Estoy muy feliz. Quiero agradecerle de nuevo por escribirme esas cartas de edificaci&oacute;n. Hoy no estar&iacute;a aqu&iacute;, si no fuera por ellas.&rdquo;</p>

<p>Adem&aacute;s del uso de las cartas de edificaci&oacute;n, usted tambi&eacute;n tiene la responsabilidad de discipular personalmente a la persona - siempre que sea posible. Si no puede reunirse con ella personalmente, ser&iacute;a muy significativo para el nuevo cristiano recibir una carta personal de aliento de parte suya.</p>

<p>Usted puede ayudar a animar a los nuevos cristianos a crecer y a comenzar a ganar y a edificar a otros a trav&eacute;s del discipulado personal, de peque&ntilde;os grupos, de estudios b&iacute;blicos hogare&ntilde;os, de cursos de la Cruzada Estudiantil, en escuelas dominicales y principalmente mediante la iglesia.</p>

<p>La Cruzada Estudiantil y Profesional para Cristo quiere servirle a usted y a todo el cuerpo de Cristo, no s&oacute;lo d&aacute;ndole capacitaci&oacute;n para compartir su fe con efectividad, sino tambi&eacute;n ayudando a capacitar y a discipular a aqu&eacute;llos a quienes usted ha guiado a Cristo.</p>

<p>Adem&aacute;s del folleto de &ldquo;Las Cuatro Leyes Espirituales&rdquo;, contamos con otros materiales dise&ntilde;ados para ayudarlo en su crecimiento cristiano y en su tarea de evangelizaci&oacute;n personal.</p>

<div class="block-quote">Para que la evangelizaci&oacute;n se constituya en un h&aacute;bito en su vida, es necesario que la capacitaci&oacute;n tambi&eacute;n sea un h&aacute;bito.</div>

<p>Para que la evangelizaci&oacute;n se constituya en un h&aacute;bito en su vida, es necesario que la capacitaci&oacute;n tambi&eacute;n sea un h&aacute;bito. Si el mundo secular depende de un programa sistem&aacute;tico de capacitaci&oacute;n, para promover mayor efectividad en sus diversas tareas y profesiones, cu&aacute;nto m&aacute;s importante es que los cristianos participen en un programa continuo de capacitaci&oacute;n a trav&eacute;s de la iglesia local.</p>

<p>Nosotros queremos ayudarle en esto. La capacitaci&oacute;n para el uso m&aacute;s efectivo de estas herramientas pr&aacute;cticas, est&aacute; disponible en nuestras oficinas y mediante cientos de cursos de capacitaci&oacute;n para estudiantes, profesionales y pastores. Estos se imparten en toda la Am&eacute;rica y en los pa&iacute;ses m&aacute;s importantes del mundo.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ UN EXPERIMENTO DE TREINTA D&Iacute;AS</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p>Yo lo invito a llevar a cabo un experimento en los pr&oacute;ximos treinta d&iacute;as. Comience cada d&iacute;a de rodillas, pidi&eacute;ndole a Dios que lo gu&iacute;e a aquella persona cuyo coraz&oacute;n ha sido preparado para que usted le testifique. Acuda en oraci&oacute;n y en el poder del Esp&iacute;ritu Santo,y con la actitud del ap&oacute;stol Pablo, &ldquo;amonestando a todo hombre, y ense&ntilde;ando a todo hombre en toda sabidur&iacute;a.&rdquo; Presente el Evangelio tal como est&aacute; desarrollado en &ldquo;Las Cuatro Leyes Espirituales.&rdquo; Espere que Dios lo use.</p>

<p>Al finalizar los treinta d&iacute;as, estoy seguro que estar&aacute; convencido, como much&iacute;simos otros antes que usted, de que no hay mayor aventura en la vida que guiar a otros a nuestro Salvador.</p>

<p>Recuerde, &ldquo;usted puede traer much&iacute;sima felicidad a este mundo&rdquo; compartiendo el Evangelio de Cristo con otros.</p>

<p>Si la siguiente oraci&oacute;n expresa el deseo de su coraz&oacute;n, h&aacute;gala suya. &ldquo;Se&ntilde;or Jes&uacute;s, agradezco Tu amor por m&iacute;. Te agradezco porque por medio de Tu muerte y resurrecci&oacute;n, mis pecados han sido perdonados y ahora puedo vivir una vida fruct&iacute;fera para ti cada d&iacute;a. Como una expresi&oacute;n de mi amor por T&iacute; y por toda persona, y en obediencia a Tu mandato, quiero darle total importancia a llevar a otros a Cristo cada d&iacute;a. Gracias por Tu promesa de hacerme fruct&iacute;fero si yo te sigo. Am&eacute;n.&rdquo;</p>

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

			<td class="social" @click="share('lesson', '¿CÓMO PUEDE  USTED DIRIGIR A  OTROS A CRISTO?: ', '/content/M2/spa/tc/tc06.html')">
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