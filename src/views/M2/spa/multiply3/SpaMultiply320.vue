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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>20.</h1></div>
                        <div class="chapter_title ltr"><h1>Buenas Nuevas Cruzan Barreras Culturales</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 12: Opening Doors-->
<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Alabar</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p class="back"><em>Lee un pasaje de las Escrituras y practiquen un canto de adoraci&oacute;n.</em></p>

<ul>
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
	</div>
	</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar a las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y aliento.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunta: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tu declaraci&oacute;n: &ldquo;Yo har&eacute;&hellip;&rdquo;?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y Animo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p><em>Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al</em>:</p>

<ul>
	<li>Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final.</li>
	<li>Reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo</li>
	<li>record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos</li>
</ul>

<p>Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada pueblo y comunidad, y el Evangelio para cada persona&quot;.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 10:34-48</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 10:34-48</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">34&nbsp;</sup>Pedro tom&oacute; la palabra, y dijo:</p>

<p>&mdash;Ahora comprendo que en realidad para Dios no hay favoritismos,<sup class="versenum">35&nbsp;</sup>sino que en toda naci&oacute;n &eacute;l ve con agrado a los que le temen y act&uacute;an con justicia.<sup class="versenum">36&nbsp;</sup>Dios envi&oacute; su mensaje al pueblo de Israel, anunciando las buenas nuevas de la paz por medio de Jesucristo, que es el Se&ntilde;or de todos.<sup class="versenum">37&nbsp;</sup>Ustedes conocen este mensaje que se difundi&oacute; por toda Judea, comenzando desde Galilea, despu&eacute;s del bautismo que predic&oacute; Juan.<sup class="versenum">38&nbsp;</sup>Me refiero a Jes&uacute;s de Nazaret: c&oacute;mo lo ungi&oacute; Dios con el Esp&iacute;ritu Santo y con poder, y c&oacute;mo anduvo haciendo el bien y sanando a todos los que estaban oprimidos por el diablo, porque Dios estaba con &eacute;l.<sup class="versenum">39&nbsp;</sup>Nosotros somos testigos de todo lo que hizo en la tierra de los jud&iacute;os y en Jerusal&eacute;n. Lo mataron, colg&aacute;ndolo de un madero,<sup class="versenum">40&nbsp;</sup>pero Dios lo resucit&oacute; al tercer d&iacute;a y dispuso que se apareciera,<sup class="versenum">41&nbsp;</sup>no a todo el pueblo, sino a nosotros, testigos previamente escogidos por Dios, que comimos y bebimos con &eacute;l despu&eacute;s de su resurrecci&oacute;n.<sup class="versenum">42&nbsp;</sup>&Eacute;l nos mand&oacute; a predicar al pueblo y a dar solemne testimonio de que ha sido nombrado por Dios como juez de vivos y muertos.<sup class="versenum">43&nbsp;</sup>De &eacute;l dan testimonio todos los profetas, que todo el que cree en &eacute;l recibe, por medio de su nombre, el perd&oacute;n de los pecados.</p>

<p><sup class="versenum">44&nbsp;</sup>Mientras Pedro estaba todav&iacute;a hablando, el Esp&iacute;ritu Santo descendi&oacute; sobre todos los que escuchaban el mensaje.<sup class="versenum">45&nbsp;</sup>Los defensores de la circuncisi&oacute;n que hab&iacute;an llegado con Pedro se quedaron asombrados de que el don del Esp&iacute;ritu Santo se hubiera derramado tambi&eacute;n sobre los gentiles,<sup class="versenum">46&nbsp;</sup>pues los o&iacute;an hablar en lenguas y alabar a Dios. Entonces Pedro respondi&oacute;:</p>

<p><sup class="versenum">47&nbsp;</sup>&mdash;&iquest;Acaso puede alguien negar el agua para que sean bautizados estos que han recibido el Esp&iacute;ritu Santo lo mismo que nosotros?</p>

<p><sup class="versenum">48&nbsp;</sup>Y mand&oacute; que fueran bautizados en el nombre de Jesucristo. Entonces le pidieron que se quedara con ellos algunos d&iacute;as.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/320.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 10:34-48&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Preguntas de Descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; hay de nuevo o se ha desarrollado a estas alturas de la historia?</li>
	<li>&iquest;Qu&eacute; se est&aacute; modelando acerca de una vida dependiente del Esp&iacute;ritu, haciendo disc&iacute;pulos o liderazgo?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p>Preguntas adicionales que puede utilizar:</p>

<ul>
	<li>&iquest;C&oacute;mo contin&uacute;an los seguidores de Jes&uacute;s Su obra de hacer disc&iacute;pulos y plantar iglesias?</li>
	<li>&iquest;C&oacute;mo est&aacute; impactando el Evangelio en las personas y en la sociedad?</li>
	<li>&iquest;Qu&eacute; barreras u obst&aacute;culos se superaron y c&oacute;mo se superaron?</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="up">Leer, contar y corregir</h2>

<ul class="up">
	<li>Lea la historia de nuevo. P&iacute;dale a alguien que cuente la historia y p&iacute;dale al grupo que corrija si es necesario.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="up">+ Resumen</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<ul>
	<li class="nobreak-final-final">El Se&ntilde;or usa a Pedro para traer la salvaci&oacute;n a Cornelio y a su familia. Esta experiencia tambi&eacute;n ense&ntilde;a a Pedro, y a los otros creyentes jud&iacute;os con &eacute;l, una importante verdad teol&oacute;gica: el Se&ntilde;or acepta a personas de todas las naciones y su oferta de salvaci&oacute;n es la misma para todas las personas. Como refuerzo de esta verdad, los gentiles experimentan el don del Esp&iacute;ritu Santo de la misma manera que los jud&iacute;os lo hab&iacute;an hecho en Pentecost&eacute;s (<span class="popup-link" @click = "popUp('pop3')"> Hechos 2:4</span>;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>Todos fueron llenos del Esp&iacute;ritu Santo y comenzaron a hablar en diferentes lenguas, seg&uacute;n el Esp&iacute;ritu les conced&iacute;a expresarse.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> Hechos 10:47</span>).

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">47&nbsp;</sup>&mdash;&iquest;Acaso puede alguien negar el agua para que sean bautizados estos que han recibido el Esp&iacute;ritu Santo lo mismo que nosotros?</p>
	<!-- end bible --></div>
	Pedro reconoce la aceptaci&oacute;n del Se&ntilde;or del pueblo no jud&iacute;o y ordena que sean bautizados inmediatamente, tal como lo hicieron con los nuevos creyentes jud&iacute;os. Pedro permanece varios d&iacute;as m&aacute;s en un hogar no jud&iacute;o para hacer un seguimiento inmediato con los nuevos creyentes. Pedro ahora ha sido parte de ver iglesias plantadas m&aacute;s all&aacute; de todas las barreras culturales de las que Jes&uacute;s habl&oacute; (<span class="popup-link" @click = "popUp('pop5')"> Hechos 1:8</span>):

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>Pero, cuando venga el Esp&iacute;ritu Santo sobre ustedes, recibir&aacute;n poder y ser&aacute;n mis testigos tanto en Jerusal&eacute;n como en toda Judea y Samaria, y hasta los confines de la tierra.</p>
	<!-- end bible --></div>
	entre los jud&iacute;os en Jerusal&eacute;n y Judea, entre los samaritanos (<span class="popup-link" @click = "popUp('pop6')"> Hechos 8</span>),&nbsp;

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<div>
	<p><sup class="versenum">1 </sup>Y Saulo estaba all&iacute;, aprobando la muerte de Esteban.</p>

	<h3>La iglesia perseguida y dispersa</h3>

	<p>Aquel d&iacute;a se desat&oacute; una gran persecuci&oacute;n contra la iglesia en Jerusal&eacute;n, y todos, excepto los ap&oacute;stoles, se dispersaron por las regiones de Judea y Samaria.<sup class="versenum">2&nbsp;</sup>Unos hombres piadosos sepultaron a Esteban e hicieron gran duelo por &eacute;l.<sup class="versenum">3&nbsp;</sup>Saulo, por su parte, causaba estragos en la iglesia: entrando de casa en casa, arrastraba a hombres y mujeres y los met&iacute;a en la c&aacute;rcel.</p>

	<h3>Felipe en Samaria</h3>

	<p><sup class="versenum">4&nbsp;</sup>Los que se hab&iacute;an dispersado predicaban la palabra por dondequiera que iban.<sup class="versenum">5&nbsp;</sup>Felipe baj&oacute; a una ciudad de Samaria y les anunciaba al Mes&iacute;as.<sup class="versenum">6&nbsp;</sup>Al o&iacute;r a Felipe y ver las se&ntilde;ales milagrosas que realizaba, mucha gente se reun&iacute;a y todos prestaban atenci&oacute;n a su mensaje.<sup class="versenum">7&nbsp;</sup>De muchos endemoniados los esp&iacute;ritus malignos sal&iacute;an dando alaridos, y un gran n&uacute;mero de paral&iacute;ticos y cojos quedaban sanos.<sup class="versenum">8&nbsp;</sup>Y aquella ciudad se llen&oacute; de alegr&iacute;a.</p>

	<h3>Sim&oacute;n el hechicero</h3>

	<p><sup class="versenum">9&nbsp;</sup>Ya desde antes hab&iacute;a en esa ciudad un hombre llamado Sim&oacute;n que, jact&aacute;ndose de ser un gran personaje, practicaba la hechicer&iacute;a y asombraba a la gente de Samaria.<sup class="versenum">10&nbsp;</sup>Todos, desde el m&aacute;s peque&ntilde;o hasta el m&aacute;s grande, le prestaban atenci&oacute;n y exclamaban: &laquo;&iexcl;Este hombre es al que llaman el Gran Poder de Dios!&raquo;</p>

	<p><sup class="versenum">11&nbsp;</sup>Lo segu&iacute;an porque por mucho tiempo los hab&iacute;a tenido deslumbrados con sus artes m&aacute;gicas.<sup class="versenum">12&nbsp;</sup>Pero, cuando creyeron a Felipe, que les anunciaba las buenas nuevas del reino de Dios y el nombre de Jesucristo, tanto hombres como mujeres se bautizaron.<sup class="versenum">13&nbsp;</sup>Sim&oacute;n mismo crey&oacute; y, despu&eacute;s de bautizarse, segu&iacute;a a Felipe por todas partes, asombrado de los grandes milagros y se&ntilde;ales que ve&iacute;a.</p>

	<p><sup class="versenum">14&nbsp;</sup>Cuando los ap&oacute;stoles que estaban en Jerusal&eacute;n se enteraron de que los samaritanos hab&iacute;an aceptado la palabra de Dios, les enviaron a Pedro y a Juan.<sup class="versenum">15&nbsp;</sup>Estos, al llegar, oraron por ellos para que recibieran el Esp&iacute;ritu Santo,<sup class="versenum">16&nbsp;</sup>porque el Esp&iacute;ritu a&uacute;n no hab&iacute;a descendido sobre ninguno de ellos; solamente hab&iacute;an sido bautizados en el nombre del Se&ntilde;or Jes&uacute;s.<sup class="versenum">17&nbsp;</sup>Entonces Pedro y Juan les impusieron las manos, y ellos recibieron el Esp&iacute;ritu Santo.</p>

	<p><sup class="versenum">18&nbsp;</sup>Al ver Sim&oacute;n que mediante la imposici&oacute;n de las manos de los ap&oacute;stoles se daba el Esp&iacute;ritu Santo, les ofreci&oacute; dinero<sup class="versenum">19&nbsp;</sup>y les pidi&oacute;:</p>

	<p>&mdash;Denme tambi&eacute;n a m&iacute; ese poder, para que todos a quienes yo les imponga las manos reciban el Esp&iacute;ritu Santo.</p>

	<p><sup class="versenum">20&nbsp;</sup>&mdash;&iexcl;Que tu dinero perezca contigo &mdash;le contest&oacute; Pedro&mdash;, porque intentaste comprar el don de Dios con dinero!<sup class="versenum">21&nbsp;</sup>No tienes arte ni parte en este asunto, porque no eres &iacute;ntegro delante de Dios.<sup class="versenum">22&nbsp;</sup>Por eso, arrepi&eacute;ntete de tu maldad y ruega al Se&ntilde;or. Tal vez te perdone el haber tenido esa mala intenci&oacute;n.<sup class="versenum">23&nbsp;</sup>Veo que vas camino a la amargura y a la esclavitud del pecado.</p>

	<p><sup class="versenum">24&nbsp;</sup>&mdash;Rueguen al Se&ntilde;or por m&iacute; &mdash;respondi&oacute; Sim&oacute;n&mdash;, para que no me suceda nada de lo que han dicho.</p>

	<p><sup class="versenum">25&nbsp;</sup>Despu&eacute;s de testificar y proclamar la palabra del Se&ntilde;or, Pedro y Juan se pusieron en camino de vuelta a Jerusal&eacute;n, y de paso predicaron el evangelio en muchas poblaciones de los samaritanos.</p>

	<p><sup class="versenum">26&nbsp;</sup>Un &aacute;ngel del Se&ntilde;or le dijo a Felipe: &laquo;Ponte en marcha hacia el sur, por el camino del desierto que baja de Jerusal&eacute;n a Gaza&raquo;.<sup class="versenum">27&nbsp;</sup>Felipe emprendi&oacute; el viaje, y resulta que se encontr&oacute; con un et&iacute;ope eunuco, alto funcionario encargado de todo el tesoro de la Candace, reina de los et&iacute;opes. Este hab&iacute;a ido a Jerusal&eacute;n para adorar<sup class="versenum">28&nbsp;</sup>y, en el viaje de regreso a su pa&iacute;s, iba sentado en su carroza, leyendo el libro del profeta Isa&iacute;as.<sup class="versenum">29&nbsp;</sup>El Esp&iacute;ritu le dijo a Felipe: &laquo;Ac&eacute;rcate y j&uacute;ntate a ese carro&raquo;.</p>

	<p><sup class="versenum">30&nbsp;</sup>Felipe se acerc&oacute; de prisa a la carroza y, al o&iacute;r que el hombre le&iacute;a al profeta Isa&iacute;as, le pregunt&oacute;:</p>

	<p>&mdash;&iquest;Acaso entiende usted lo que est&aacute; leyendo?</p>

	<p><sup class="versenum">31&nbsp;</sup>&mdash;&iquest;Y c&oacute;mo voy a entenderlo &mdash;contest&oacute;&mdash; si nadie me lo explica?</p>

	<p>As&iacute; que invit&oacute; a Felipe a subir y sentarse con &eacute;l.<sup class="versenum">32&nbsp;</sup>El pasaje de la Escritura que estaba leyendo era el siguiente:</p>

	<p>&laquo;Como oveja, fue llevado al matadero;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y como cordero que enmudece ante su trasquilador,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;ni siquiera abri&oacute; su boca.<br />
	<sup class="versenum">33&nbsp;</sup>Lo humillaron y no le hicieron justicia.<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&iquest;Qui&eacute;n describir&aacute; su descendencia?<br />
	&nbsp;&nbsp;&nbsp;&nbsp;Porque su vida fue arrancada de la tierra&raquo;.</p>
	</div>

	<p><sup class="versenum">34&nbsp;</sup>&mdash;D&iacute;game usted, por favor, &iquest;de qui&eacute;n habla aqu&iacute; el profeta, de s&iacute; mismo o de alg&uacute;n otro? &mdash;le pregunt&oacute; el eunuco a Felipe.</p>

	<p><sup class="versenum">35&nbsp;</sup>Entonces Felipe, comenzando con ese mismo pasaje de la Escritura, le anunci&oacute; las buenas nuevas acerca de Jes&uacute;s.<sup class="versenum">36&nbsp;</sup>Mientras iban por el camino, llegaron a un lugar donde hab&iacute;a agua, y dijo el eunuco:</p>

	<p>&mdash;Mire usted, aqu&iacute; hay agua. &iquest;Qu&eacute; impide que yo sea bautizado?</p>

	<p><sup class="versenum">38&nbsp;</sup>Entonces mand&oacute; parar la carroza, y ambos bajaron al agua, y Felipe lo bautiz&oacute;.<sup class="versenum">39&nbsp;</sup>Cuando subieron del agua, el Esp&iacute;ritu del Se&ntilde;or se llev&oacute; de repente a Felipe. El eunuco no volvi&oacute; a verlo, pero sigui&oacute; alegre su camino.<sup class="versenum">40&nbsp;</sup>En cuanto a Felipe, apareci&oacute; en Azoto, y se fue predicando el evangelio en todos los pueblos hasta que lleg&oacute; a Cesarea.</p>
	<!-- end bible --></div>
	y ahora entre los gentiles (<span class="popup-link" @click = "popUp('pop7')"> Hechos 10</span>).&nbsp;

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<h3>Cornelio manda llamar a Pedro</h3>

	<p><sup class="versenum">1 </sup>Viv&iacute;a en Cesarea un centuri&oacute;n llamado Cornelio, del regimiento conocido como el Italiano.<sup class="versenum">2&nbsp;</sup>&Eacute;l y toda su familia eran devotos y temerosos de Dios. Realizaba muchas obras de beneficencia para el pueblo de Israel y oraba a Dios constantemente.<sup class="versenum">3&nbsp;</sup>Un d&iacute;a, como a las tres de la tarde, tuvo una visi&oacute;n. Vio claramente a un &aacute;ngel de Dios que se le acercaba y le dec&iacute;a:</p>

	<p>&mdash;&iexcl;Cornelio!</p>

	<p><sup class="versenum">4&nbsp;</sup>&mdash;&iquest;Qu&eacute; quieres, Se&ntilde;or? &mdash;le pregunt&oacute; Cornelio, mir&aacute;ndolo fijamente y con mucho miedo.</p>

	<p>&mdash;Dios ha recibido tus oraciones y tus obras de beneficencia como una ofrenda &mdash;le contest&oacute; el &aacute;ngel&mdash;.<sup class="versenum">5&nbsp;</sup>Env&iacute;a de inmediato a algunos hombres a Jope para que hagan venir a un tal Sim&oacute;n, apodado Pedro.<sup class="versenum">6&nbsp;</sup>&Eacute;l se hospeda con Sim&oacute;n el curtidor, que tiene su casa junto al mar.</p>

	<p><sup class="versenum">7&nbsp;</sup>Despu&eacute;s de que se fue el &aacute;ngel que le hab&iacute;a hablado, Cornelio llam&oacute; a dos de sus siervos y a un soldado devoto de los que le serv&iacute;an regularmente.<sup class="versenum">8&nbsp;</sup>Les explic&oacute; todo lo que hab&iacute;a sucedido y los envi&oacute; a Jope.</p>

	<h3>La visi&oacute;n de Pedro</h3>

	<p><sup class="versenum">9&nbsp;</sup>Al d&iacute;a siguiente, mientras ellos iban de camino y se acercaban a la ciudad, Pedro subi&oacute; a la azotea a orar. Era casi el mediod&iacute;a.<sup class="versenum">10&nbsp;</sup>Tuvo hambre y quiso algo de comer. Mientras se lo preparaban, le sobrevino un &eacute;xtasis.<sup class="versenum">11&nbsp;</sup>Vio el cielo abierto y algo parecido a una gran s&aacute;bana que, suspendida por las cuatro puntas, descend&iacute;a hacia la tierra.<sup class="versenum">12&nbsp;</sup>En ella hab&iacute;a toda clase de cuadr&uacute;pedos, como tambi&eacute;n reptiles y aves.</p>

	<p><sup class="versenum">13&nbsp;</sup>&mdash;Lev&aacute;ntate, Pedro; mata y come &mdash;le dijo una voz.</p>

	<p><sup class="versenum">14&nbsp;</sup>&mdash;&iexcl;De ninguna manera, Se&ntilde;or! &mdash;replic&oacute; Pedro&mdash;. Jam&aacute;s he comido nada impuro o inmundo.</p>

	<p><sup class="versenum">15&nbsp;</sup>Por segunda vez le insisti&oacute; la voz:</p>

	<p>&mdash;Lo que Dios ha purificado, t&uacute; no lo llames impuro.</p>

	<p><sup class="versenum">16&nbsp;</sup>Esto sucedi&oacute; tres veces, y en seguida la s&aacute;bana fue recogida al cielo.</p>

	<p><sup class="versenum">17&nbsp;</sup>Pedro no atinaba a explicarse cu&aacute;l podr&iacute;a ser el significado de la visi&oacute;n. Mientras tanto, los hombres enviados por Cornelio, que estaban preguntando por la casa de Sim&oacute;n, se presentaron a la puerta.<sup class="versenum">18&nbsp;</sup>Llamando, averiguaron si all&iacute; se hospedaba Sim&oacute;n, apodado Pedro.</p>

	<p><sup class="versenum">19&nbsp;</sup>Mientras Pedro segu&iacute;a reflexionando sobre el significado de la visi&oacute;n, el Esp&iacute;ritu le dijo: &laquo;Mira, Sim&oacute;n, tres hombres te buscan.<sup class="versenum">20&nbsp;</sup>Date prisa, baja y no dudes en ir con ellos, porque yo los he enviado&raquo;.</p>

	<p><sup class="versenum">21&nbsp;</sup>Pedro baj&oacute; y les dijo a los hombres:</p>

	<p>&mdash;Aqu&iacute; estoy; yo soy el que ustedes buscan. &iquest;Qu&eacute; asunto los ha tra&iacute;do por ac&aacute;?</p>

	<p><sup class="versenum">22&nbsp;</sup>Ellos le contestaron:</p>

	<p>&mdash;Venimos de parte del centuri&oacute;n Cornelio, un hombre justo y temeroso de Dios, respetado por todo el pueblo jud&iacute;o. Un &aacute;ngel de Dios le dio instrucciones de invitarlo a usted a su casa para escuchar lo que usted tiene que decirle.</p>

	<p><sup class="versenum">23&nbsp;</sup>Entonces Pedro los invit&oacute; a pasar y los hosped&oacute;.</p>

	<p>Al d&iacute;a siguiente, Pedro se fue con ellos acompa&ntilde;ado de algunos creyentes de Jope.<sup class="versenum">24&nbsp;</sup>Un d&iacute;a despu&eacute;s lleg&oacute; a Cesarea. Cornelio estaba esper&aacute;ndolo con los parientes y amigos &iacute;ntimos que hab&iacute;a reunido.<sup class="versenum">25&nbsp;</sup>Al llegar Pedro a la casa, Cornelio sali&oacute; a recibirlo y, postr&aacute;ndose delante de &eacute;l, le rindi&oacute; homenaje.<sup class="versenum">26&nbsp;</sup>Pero Pedro hizo que se levantara, y le dijo:</p>

	<p>&mdash;Ponte de pie, que solo soy un hombre como t&uacute;.</p>

	<p><sup class="versenum">27&nbsp;</sup>Pedro entr&oacute; en la casa conversando con &eacute;l, y encontr&oacute; a muchos reunidos.</p>

	<p><sup class="versenum">28&nbsp;</sup>Entonces les habl&oacute; as&iacute;:</p>

	<p>&mdash;Ustedes saben muy bien que nuestra ley proh&iacute;be que un jud&iacute;o se junte con un extranjero o lo visite. Pero Dios me ha hecho ver que a nadie debo llamar impuro o inmundo.<sup class="versenum">29&nbsp;</sup>Por eso, cuando mandaron por m&iacute;, vine sin poner ninguna objeci&oacute;n. Ahora perm&iacute;tanme preguntarles: &iquest;para qu&eacute; me hicieron venir?</p>

	<p><sup class="versenum">30&nbsp;</sup>Cornelio contest&oacute;:</p>

	<p>&mdash;Hace cuatro d&iacute;as a esta misma hora, las tres de la tarde, estaba yo en casa orando. De repente apareci&oacute; delante de m&iacute; un hombre vestido con ropa brillante,<sup class="versenum">31&nbsp;</sup>y me dijo: &ldquo;Cornelio, Dios ha o&iacute;do tu oraci&oacute;n y se ha acordado de tus obras de beneficencia.<sup class="versenum">32&nbsp;</sup>Por lo tanto, env&iacute;a a alguien a Jope para hacer venir a Sim&oacute;n, apodado Pedro, que se hospeda en casa de Sim&oacute;n el curtidor, junto al mar&rdquo;.<sup class="versenum">33&nbsp;</sup>As&iacute; que inmediatamente mand&eacute; a llamarte, y t&uacute; has tenido la bondad de venir. Ahora estamos todos aqu&iacute;, en la presencia de Dios, para escuchar todo lo que el Se&ntilde;or te ha encomendado que nos digas.</p>

	<p><sup class="versenum">34&nbsp;</sup>Pedro tom&oacute; la palabra, y dijo:</p>

	<p>&mdash;Ahora comprendo que en realidad para Dios no hay favoritismos,<sup class="versenum">35&nbsp;</sup>sino que en toda naci&oacute;n &eacute;l ve con agrado a los que le temen y act&uacute;an con justicia.<sup class="versenum">36&nbsp;</sup>Dios envi&oacute; su mensaje al pueblo de Israel, anunciando las buenas nuevas de la paz por medio de Jesucristo, que es el Se&ntilde;or de todos.<sup class="versenum">37&nbsp;</sup>Ustedes conocen este mensaje que se difundi&oacute; por toda Judea, comenzando desde Galilea, despu&eacute;s del bautismo que predic&oacute; Juan.<sup class="versenum">38&nbsp;</sup>Me refiero a Jes&uacute;s de Nazaret: c&oacute;mo lo ungi&oacute; Dios con el Esp&iacute;ritu Santo y con poder, y c&oacute;mo anduvo haciendo el bien y sanando a todos los que estaban oprimidos por el diablo, porque Dios estaba con &eacute;l.<sup class="versenum">39&nbsp;</sup>Nosotros somos testigos de todo lo que hizo en la tierra de los jud&iacute;os y en Jerusal&eacute;n. Lo mataron, colg&aacute;ndolo de un madero,<sup class="versenum">40&nbsp;</sup>pero Dios lo resucit&oacute; al tercer d&iacute;a y dispuso que se apareciera,<sup class="versenum">41&nbsp;</sup>no a todo el pueblo, sino a nosotros, testigos previamente escogidos por Dios, que comimos y bebimos con &eacute;l despu&eacute;s de su resurrecci&oacute;n.<sup class="versenum">42&nbsp;</sup>&Eacute;l nos mand&oacute; a predicar al pueblo y a dar solemne testimonio de que ha sido nombrado por Dios como juez de vivos y muertos.<sup class="versenum">43&nbsp;</sup>De &eacute;l dan testimonio todos los profetas, que todo el que cree en &eacute;l recibe, por medio de su nombre, el perd&oacute;n de los pecados.</p>

	<p><sup class="versenum">44&nbsp;</sup>Mientras Pedro estaba todav&iacute;a hablando, el Esp&iacute;ritu Santo descendi&oacute; sobre todos los que escuchaban el mensaje.<sup class="versenum">45&nbsp;</sup>Los defensores de la circuncisi&oacute;n que hab&iacute;an llegado con Pedro se quedaron asombrados de que el don del Esp&iacute;ritu Santo se hubiera derramado tambi&eacute;n sobre los gentiles,<sup class="versenum">46&nbsp;</sup>pues los o&iacute;an hablar en lenguas y alabar a Dios. Entonces Pedro respondi&oacute;:</p>

	<p><sup class="versenum">47&nbsp;</sup>&mdash;&iquest;Acaso puede alguien negar el agua para que sean bautizados estos que han recibido el Esp&iacute;ritu Santo lo mismo que nosotros?</p>

	<p><sup class="versenum">48&nbsp;</sup>Y mand&oacute; que fueran bautizados en el nombre de Jesucristo. Entonces le pidieron que se quedara con ellos algunos d&iacute;as.</p>
	<!-- end bible --></div>
	Las puertas a todas las fronteras culturales ahora est&aacute;n abiertas para la expansi&oacute;n del Reino.</li>
</ul>

</div>

<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:
	<ul>
		<li>Orar, Cuidar, Compartir</li>
		<li>Evangelio</li>
		<li>Estudios B&iacute;blicos Fundamentales</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo comparan con a su grupo.</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">Orando por la Misi&oacute;n</h2>

<ul class="forward">
	<li>Comprometa las metas de todos al Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y que nos use para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Buenas Nuevas Cruzan Barreras Culturales: ', '/content/M2/spa/multiply3/multiply320.html')">
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