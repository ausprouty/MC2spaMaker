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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>13.</h1></div>
                        <div class="chapter_title ltr"><h1>Comprometiéndonos unos con otros</h1></div>
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
	<li class="back">Ejemplo: Lea el <span class="popup-link" @click = "popUp('pop1')"> Salmo&nbsp;100</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<h4 class="psalm-title">Salmo de acci&oacute;n de gracias.</h4>

	<p><sup class="versenum">1 </sup>Aclamen alegres al <span class="divine-name small-caps">Se&ntilde;or, habitantes de toda la tierra;<br />
	<sup class="versenum">2&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;adoren al <span class="divine-name small-caps">Se&ntilde;or con regocijo.<br />
	Pres&eacute;ntense ante &eacute;l<br />
	&nbsp;&nbsp;&nbsp;&nbsp;con c&aacute;nticos de j&uacute;bilo.<br />
	<sup class="versenum">3&nbsp;</sup>Reconozcan que el <span class="divine-name small-caps">Se&ntilde;or es Dios;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&eacute;l nos hizo, y somos suyos.<br />
	&nbsp;&nbsp;&nbsp;&nbsp;Somos su pueblo, ovejas de su prado.</span></span></span></p>
	</div>

	<p><sup class="versenum">4&nbsp;</sup>Entren por sus puertas con acci&oacute;n de gracias;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;vengan a sus atrios con himnos de alabanza;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;denle gracias, alaben su nombre.<br />
	<sup class="versenum">5&nbsp;</sup>Porque el <span class="divine-name small-caps">Se&ntilde;or es bueno y su gran amor es eterno;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;su fidelidad permanece para siempre.</span></p>
	</div>
	<!-- end bible --></div>
	y canten alabanzas.</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

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
<p class="back"><em>Proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos.</em></p>

<p class="back">Ejemplo: Lea <span class="popup-link" @click = "popUp('pop2')"> Efesios 2:1-10</span>.</p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">1 </sup>En otro tiempo ustedes estaban muertos en sus transgresiones y pecados,<sup class="versenum">2&nbsp;</sup>en los cuales andaban conforme a los poderes de este mundo. Se conduc&iacute;an seg&uacute;n el que gobierna las tinieblas, seg&uacute;n el esp&iacute;ritu que ahora ejerce su poder en los que viven en la desobediencia.<sup class="versenum">3&nbsp;</sup>En ese tiempo tambi&eacute;n todos nosotros viv&iacute;amos como ellos, impulsados por nuestros deseos pecaminosos, siguiendo nuestra propia voluntad y nuestros prop&oacute;sitos. Como los dem&aacute;s, &eacute;ramos por naturaleza objeto de la ira de Dios.<sup class="versenum">4&nbsp;</sup>Pero Dios, que es rico en misericordia, por su gran amor por nosotros,<sup class="versenum">5&nbsp;</sup>nos dio vida con Cristo, aun cuando est&aacute;bamos muertos en pecados. &iexcl;Por gracia ustedes han sido salvados!<sup class="versenum">6&nbsp;</sup>Y en uni&oacute;n con Cristo Jes&uacute;s, Dios nos resucit&oacute; y nos hizo sentar con &eacute;l en las regiones celestiales,<sup class="versenum">7&nbsp;</sup>para mostrar en los tiempos venideros la incomparable riqueza de su gracia, que por su bondad derram&oacute; sobre nosotros en Cristo Jes&uacute;s.<sup class="versenum">8&nbsp;</sup>Porque por gracia ustedes han sido salvados mediante la fe; esto no procede de ustedes, sino que es el regalo de Dios,<sup class="versenum">9&nbsp;</sup>no por obras, para que nadie se jacte.<sup class="versenum">10&nbsp;</sup>Porque somos hechura de Dios, creados en Cristo Jes&uacute;s para buenas obras, las cuales Dios dispuso de antemano a fin de que las pongamos en pr&aacute;ctica.</p>
</div>

<p class="back">&iquest;No es incre&iacute;ble? Est&aacute;bamos muertos en nuestros pecados, pero Dios nos ha dado vida. &Eacute;l hizo todo esto para que pudieras llevar a cabo las buenas obras que &Eacute;l ha preparado para ti. &iexcl;Nuestras vidas est&aacute;n llenas de prop&oacute;sito y significado! Animemos a cada uno record&aacute;ndonos a nosotros mismos estas verdades.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Durante una fiesta jud&iacute;a llamada Pentecost&eacute;s, jud&iacute;os de todas partes del mundo estaban en Jerusal&eacute;n. Dios envi&oacute; el Esp&iacute;ritu Santo sobre 120 de Sus seguidores que se hab&iacute;an reunido. A trav&eacute;s del poder del Esp&iacute;ritu, los 120 seguidores comenzaron a hablar en los idiomas de los visitantes de todo el mundo. Pedro comenz&oacute; a predicar a una multitud sobre la muerte y resurrecci&oacute;n de Jes&uacute;s, demostrando que &Eacute;l era el Mes&iacute;as. Como resultado, 3.000 personas creyeron y fueron bautizadas. Pero &iquest;qu&eacute; vino despu&eacute;s de que creyeron?</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 2:41-47</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 2:41-47</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>La comunidad de los creyentes</h3>

<p><sup class="versenum">41&nbsp;</sup>As&iacute;, pues, los que recibieron su mensaje fueron bautizados, y aquel d&iacute;a se unieron a la iglesia unas tres mil personas.<sup class="versenum">42&nbsp;</sup>Se manten&iacute;an firmes en la ense&ntilde;anza de los ap&oacute;stoles, en la comuni&oacute;n, en el partimiento del pan y en la oraci&oacute;n.<sup class="versenum">43&nbsp;</sup>Todos estaban asombrados por los muchos prodigios y se&ntilde;ales que realizaban los ap&oacute;stoles.<sup class="versenum">44&nbsp;</sup>Todos los creyentes estaban juntos y ten&iacute;an todo en com&uacute;n:<sup class="versenum">45&nbsp;</sup>vend&iacute;an sus propiedades y posesiones, y compart&iacute;an sus bienes entre s&iacute; seg&uacute;n la necesidad de cada uno.<sup class="versenum">46&nbsp;</sup>No dejaban de reunirse en el templo ni un solo d&iacute;a. De casa en casa part&iacute;an el pan y compart&iacute;an la comida con alegr&iacute;a y generosidad,<sup class="versenum">47&nbsp;</sup>alabando a Dios y disfrutando de la estimaci&oacute;n general del pueblo. Y cada d&iacute;a el Se&ntilde;or a&ntilde;ad&iacute;a al grupo los que iban siendo salvos.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/113.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 2:41-47&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Preguntas de Descubrimiento (Todos responden)</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n (o qu&eacute; te gust&oacute; m&aacute;s) y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; aprendiste acerca de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendiste sobre las personas?</li>
	<li>&iquest;C&oacute;mo obedecer&aacute;s a Jes&uacute;s ahora que sabes esto?</li>
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
<p class="up">Lee <span class="popup-link" @click = "popUp('pop3')"> Mateo 16:18</span>.&nbsp;</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">18&nbsp;</sup>Yo te digo que t&uacute; eres Pedro, y sobre esta piedra edificar&eacute; mi iglesia, y las puertas del reino de la muerte no prevalecer&aacute;n contra ella.</p>
<!-- end bible --></div>
El Esp&iacute;ritu Santo llev&oacute; a los primeros creyentes a reunirse regularmente para la adoraci&oacute;n, la oraci&oacute;n, la comuni&oacute;n, el estudio de la palabra de Dios, am&aacute;ndose unos a otros y acerc&aacute;ndose a aquellos que a&uacute;n no conoc&iacute;an a Cristo. En cada lugar del libro de Hechos, las personas se convirtieron en seguidores de Cristo e hicieron este mismo compromiso unos con otros. &iexcl;Esta es una descripci&oacute;n de una iglesia local!

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique dibujar el c&iacute;rculo de salud de la iglesia como una manera f&aacute;cil de recordar todas las caracter&iacute;sticas de la iglesia. Incluya: adoraci&oacute;n, el compa&ntilde;erismo, el estudio de la Palabra de Dios, la oraci&oacute;n, la Cena del Se&ntilde;or, el bautismo, ministerio de servicio, testifican, dar y cuidado de los l&iacute;deres.</li>
	<li>Discuta lo siguiente:
	<ul>
		<li class="flush">&quot;&iquest;Este grupo quiere hacer ese mismo compromiso el uno con el otro? &iquest;Para ser la iglesia del Se&ntilde;or en este lugar?&quot;</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica a 5 personas de tu Lista Oikos con las que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo compartan con su grupo.</li>
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


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Comprometiéndonos unos con otros: ', '/content/M2/spa/multiply1/multiply113.html')">
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