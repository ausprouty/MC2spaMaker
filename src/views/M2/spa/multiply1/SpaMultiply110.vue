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
                        <div class="chapter_number ltr"><h1>10.</h1></div>
                        <div class="chapter_title ltr"><h1>Mi historia</h1></div>
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
	<li class="back">Ejemplo: Lea el <span class="popup-link" @click = "popUp('pop3')"> Salmo&nbsp;66:1-4</span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<h4 class="psalm-title">Al director musical. C&aacute;ntico. Salmo.</h4>

	<p><sup class="versenum">1 </sup>&iexcl;Aclamen alegres a Dios,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;habitantes de toda la tierra!<br />
	<sup class="versenum">2&nbsp;</sup>Canten salmos a su glorioso nombre;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&iexcl;r&iacute;ndanle gloriosas alabanzas!<br />
	<sup class="versenum">3&nbsp;</sup>D&iacute;ganle a Dios:<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&laquo;&iexcl;Cu&aacute;n imponentes son tus obras!<br />
	Es tan grande tu poder<br />
	&nbsp;&nbsp;&nbsp;&nbsp;que tus enemigos mismos se rinden ante ti.<br />
	<sup class="versenum">4&nbsp;</sup>Toda la tierra se postra en tu presencia,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y te cantan salmos;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;cantan salmos a tu nombre&raquo;. <em class="selah">Selah</em></p>
	</div>
	<!-- end bible --></div>
	y cante alabanzas.</li>
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

<ul>
	<li class="nobreak-final-final">Ejemplo: En <span class="popup-link" @click = "popUp('pop2')"> Juan 3:8</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">8&nbsp;</sup>El viento sopla por donde quiere, y lo oyes silbar, aunque ignoras de d&oacute;nde viene y a d&oacute;nde va. Lo mismo pasa con todo el que nace del Esp&iacute;ritu.</p>
	<!-- end bible --></div>
	, el Esp&iacute;ritu de Dios se describe como un viento. No podemos controlarlo ni hacerlo mover; &Eacute;l sopla donde &Eacute;l quiere. No podemos crear movimientos, s&oacute;lo el Esp&iacute;ritu de Dios puede. Pero podemos posicionarnos de manera que cuando &Eacute;l se mueva, estemos listos para movernos con &Eacute;l. Las sencillas habilidades que has estado aprendiendo ayudan a hacer precisamente eso. La buena noticia es esta: &iexcl;el Esp&iacute;ritu de Dios est&aacute; obrando en todas partes! Sigamos prepar&aacute;ndonos y orando para que el Esp&iacute;ritu se mueva.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Pablo hab&iacute;a sido arrestado porque fue acusado falsamente por los l&iacute;deres jud&iacute;os de violar una ley del templo. Durante su defensa ante el Gobernador, Pablo comparti&oacute; la historia de c&oacute;mo lleg&oacute; a conocer a Cristo.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 22:1-21</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 22:1-21</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">1 </sup>&laquo;Padres y hermanos, escuchen ahora mi defensa&raquo;.</p>

<p><sup class="versenum">2&nbsp;</sup>Al o&iacute;r que les hablaba en arameo, guardaron m&aacute;s silencio.</p>

<p>Pablo continu&oacute;:<sup class="versenum">3&nbsp;</sup>&laquo;Yo soy jud&iacute;o, nacido en Tarso de Cilicia, pero criado en esta ciudad. Bajo la tutela de Gamaliel recib&iacute; instrucci&oacute;n cabal en la ley de nuestros antepasados, y fui tan celoso de Dios como cualquiera de ustedes lo es hoy d&iacute;a.<sup class="versenum">4&nbsp;</sup>Persegu&iacute; a muerte a los seguidores de este Camino, arrestando y echando en la c&aacute;rcel a hombres y mujeres por igual,<sup class="versenum">5&nbsp;</sup>y as&iacute; lo pueden atestiguar el sumo sacerdote y todo el Consejo de ancianos. Incluso obtuve de parte de ellos cartas de extradici&oacute;n para nuestros hermanos jud&iacute;os en Damasco, y fui all&aacute; con el fin de traer presos a Jerusal&eacute;n a los que encontrara, para que fueran castigados.</p>

<p><sup class="versenum">6&nbsp;</sup>&raquo;Sucedi&oacute; que a eso del mediod&iacute;a, cuando me acercaba a Damasco, una intensa luz del cielo relampague&oacute; de repente a mi alrededor.<sup class="versenum">7&nbsp;</sup>Ca&iacute; al suelo y o&iacute; una voz que me dec&iacute;a: &ldquo;Saulo, Saulo, &iquest;por qu&eacute; me persigues?&rdquo;<sup class="versenum">8&nbsp;</sup>&ldquo;&iquest;Qui&eacute;n eres, Se&ntilde;or?&rdquo;, pregunt&eacute;. &ldquo;Yo soy Jes&uacute;s de Nazaret, a quien t&uacute; persigues&rdquo;, me contest&oacute; &eacute;l.<sup class="versenum">9&nbsp;</sup>Los que me acompa&ntilde;aban vieron la luz, pero no percibieron la voz del que me hablaba.<sup class="versenum">10&nbsp;</sup>&ldquo;&iquest;Qu&eacute; debo hacer, Se&ntilde;or?&rdquo;, le pregunt&eacute;. &ldquo;Lev&aacute;ntate &mdash;dijo el Se&ntilde;or&mdash;, y entra en Damasco. All&iacute; se te dir&aacute; todo lo que se ha dispuesto que hagas&rdquo;.<sup class="versenum">11&nbsp;</sup>Mis compa&ntilde;eros me llevaron de la mano hasta Damasco porque el resplandor de aquella luz me hab&iacute;a dejado ciego.</p>

<p><sup class="versenum">12&nbsp;</sup>&raquo;Vino a verme un tal Anan&iacute;as, hombre devoto que observaba la ley y a quien respetaban mucho los jud&iacute;os que all&iacute; viv&iacute;an.<sup class="versenum">13&nbsp;</sup>Se puso a mi lado y me dijo: &ldquo;Hermano Saulo, &iexcl;recibe la vista!&rdquo; Y en aquel mismo instante recobr&eacute; la vista y pude verlo.<sup class="versenum">14&nbsp;</sup>Luego dijo: &ldquo;El Dios de nuestros antepasados te ha escogido para que conozcas su voluntad, y para que veas al Justo y oigas las palabras de su boca.<sup class="versenum">15&nbsp;</sup>T&uacute; le ser&aacute;s testigo ante toda persona de lo que has visto y o&iacute;do.<sup class="versenum">16&nbsp;</sup>Y ahora, &iquest;qu&eacute; esperas? Lev&aacute;ntate, baut&iacute;zate y l&aacute;vate de tus pecados, invocando su nombre&rdquo;.</p>

<p><sup class="versenum">17&nbsp;</sup>&raquo;Cuando volv&iacute; a Jerusal&eacute;n, mientras oraba en el templo tuve una visi&oacute;n<sup class="versenum">18&nbsp;</sup>y vi al Se&ntilde;or que me hablaba: &ldquo;&iexcl;Date prisa! Sal inmediatamente de Jerusal&eacute;n, porque no aceptar&aacute;n tu testimonio acerca de m&iacute;&rdquo;.<sup class="versenum">19&nbsp;</sup>&ldquo;Se&ntilde;or &mdash;le respond&iacute;&mdash;, ellos saben que yo andaba de sinagoga en sinagoga encarcelando y azotando a los que creen en ti;<sup class="versenum">20&nbsp;</sup>y, cuando se derramaba la sangre de tu testigo Esteban, ah&iacute; estaba yo, dando mi aprobaci&oacute;n y cuidando la ropa de quienes lo mataban&rdquo;.<sup class="versenum">21&nbsp;</sup>Pero el Se&ntilde;or me replic&oacute;: &ldquo;Vete; yo te enviar&eacute; lejos, a los gentiles&rdquo;&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/110.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 22:1-21&nbsp;</button>
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
<p class="up">La historia de Pablo (testimonio) se puede resumir en 3 partes:</p>

<ol>
	<li class="up">su vida antes de conocer a Cristo,</li>
	<li class="up">c&oacute;mo conoci&oacute; a Cristo, y</li>
	<li class="up">su vida despu&eacute;s de conocer a Cristo.</li>
</ol>

<p class="up">Este patr&oacute;n sigue siendo una manera efectiva de decirle a los dem&aacute;s lo que Jes&uacute;s ha hecho en nuestras vidas. Nuestras historias son un poderoso testimonio de los beneficios de conocer al Se&ntilde;or.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Da un ejemplo moderno contando tu propia historia y destacando las 3 partes</li>
	<li>Practique compartiendo su historia con un compa&ntilde;ero</li>
	<li>P&iacute;deles que elijan 1 palabra que describa las 3 partes de su historia &bull; P&iacute;dales que lo expandan escribiendo 2-3 oraciones para cada una de las 3 partes</li>
	<li>D&eacute;jalos practicar contando su historia con un compa&ntilde;ero. Despu&eacute;s de 3 minutos, p&iacute;dales que den su opini&oacute;n y que cambien.</li>
	<li>Si el tiempo lo permite, p&iacute;dalos que cambien de compa&ntilde;ero y repitan el mismo proceso</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica a 5 personas de tu Lista Oikos con las que tomar&aacute;s la iniciativa de ministrar esta semana.
	<ul>
		<li>Usa lo que aprendiste esta semana con al menos 3</li>
	</ul>
	</li>
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

			<td class="social" @click="share('lesson', 'Mi historia: ', '/content/M2/spa/multiply1/multiply110.html')">
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