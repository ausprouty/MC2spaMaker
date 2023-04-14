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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>25.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesús, El que dice la verdad</h1></div>
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
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp;</sup>y toda lengua confiese que Jesucristo es el Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6</span>)</li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
<!-- end bible --></div>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s.</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunte: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tus declaraciones: Yo har&eacute;&hellip; cu&aacute;ndo&hellip;?&quot;</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y est&iacute;mulo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p class="back">Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al:</p>

<ul>
	<li class="back">Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final, o</li>
	<li class="back">reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo, o</li>
	<li class="back">record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos.</li>
</ul>

<p class="back">Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada ciudad y comunidad, y el Evangelio para cada persona&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada.</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Juan 5:16-47</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 5:16-47</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Vida mediante el Hijo</h3>

<p><sup class="versenum">16&nbsp;</sup>Precisamente por esto los jud&iacute;os persegu&iacute;an a Jes&uacute;s, pues hac&iacute;a tales cosas en s&aacute;bado.<sup class="versenum">17&nbsp;</sup>Pero Jes&uacute;s les respond&iacute;a:</p>

<p>&mdash;Mi Padre a&uacute;n hoy est&aacute; trabajando, y yo tambi&eacute;n trabajo.</p>

<p><sup class="versenum">18&nbsp;</sup>As&iacute; que los jud&iacute;os redoblaban sus esfuerzos para matarlo, pues no solo quebrantaba el s&aacute;bado, sino que incluso llamaba a Dios su propio Padre, con lo que &eacute;l mismo se hac&iacute;a igual a Dios.</p>

<p><sup class="versenum">19&nbsp;</sup>Entonces Jes&uacute;s afirm&oacute;:</p>

<p>&mdash;Ciertamente les aseguro que el Hijo no puede hacer nada por su propia cuenta, sino solamente lo que ve que su Padre hace, porque cualquier cosa que hace el Padre, la hace tambi&eacute;n el Hijo.<sup class="versenum">20&nbsp;</sup>Pues el Padre ama al Hijo y le muestra todo lo que hace. S&iacute;, y aun cosas m&aacute;s grandes que estas le mostrar&aacute;, que los dejar&aacute; a ustedes asombrados.<sup class="versenum">21&nbsp;</sup>Porque as&iacute; como el Padre resucita a los muertos y les da vida, as&iacute; tambi&eacute;n el Hijo da vida a quienes a &eacute;l le place.<sup class="versenum">22&nbsp;</sup>Adem&aacute;s, el Padre no juzga a nadie, sino que todo juicio lo ha delegado en el Hijo,<sup class="versenum">23&nbsp;</sup>para que todos honren al Hijo como lo honran a &eacute;l. El que se niega a honrar al Hijo no honra al Padre que lo envi&oacute;.</p>

<p><sup class="versenum">24&nbsp;</sup>&raquo;Ciertamente les aseguro que el que oye mi palabra y cree al que me envi&oacute; tiene vida eterna y no ser&aacute; juzgado, sino que ha pasado de la muerte a la vida.<sup class="versenum">25&nbsp;</sup>Ciertamente les aseguro que ya viene la hora, y ha llegado ya, en que los muertos oir&aacute;n la voz del Hijo de Dios, y los que la oigan vivir&aacute;n.<sup class="versenum">26&nbsp;</sup>Porque as&iacute; como el Padre tiene vida en s&iacute; mismo, as&iacute; tambi&eacute;n ha concedido al Hijo el tener vida en s&iacute; mismo,<sup class="versenum">27&nbsp;</sup>y le ha dado autoridad para juzgar, puesto que es el Hijo del hombre.</p>

<p><sup class="versenum">28&nbsp;</sup>&raquo;No se asombren de esto, porque viene la hora en que todos los que est&aacute;n en los sepulcros oir&aacute;n su voz,<sup class="versenum">29&nbsp;</sup>y saldr&aacute;n de all&iacute;. Los que han hecho el bien resucitar&aacute;n para tener vida, pero los que han practicado el mal resucitar&aacute;n para ser juzgados.<sup class="versenum">30&nbsp;</sup>Yo no puedo hacer nada por mi propia cuenta; juzgo solo seg&uacute;n lo que oigo, y mi juicio es justo, pues no busco hacer mi propia voluntad, sino cumplir la voluntad del que me envi&oacute;.</p>

<h3>Los testimonios a favor del Hijo</h3>

<p><sup class="versenum">31&nbsp;</sup>&raquo;Si yo testifico en mi favor, ese testimonio no es v&aacute;lido.<sup class="versenum">32&nbsp;</sup>Otro es el que testifica en mi favor, y me consta que es v&aacute;lido el testimonio que &eacute;l da de m&iacute;.</p>

<p><sup class="versenum">33&nbsp;</sup>&raquo;Ustedes enviaron a preguntarle a Juan, y &eacute;l dio un testimonio v&aacute;lido.<sup class="versenum">34&nbsp;</sup>Y no es que acepte yo el testimonio de un hombre; m&aacute;s bien lo menciono para que ustedes sean salvos.<sup class="versenum">35&nbsp;</sup>Juan era una l&aacute;mpara encendida y brillante, y ustedes decidieron disfrutar de su luz por alg&uacute;n tiempo.</p>

<p><sup class="versenum">36&nbsp;</sup>&raquo;El testimonio con que yo cuento tiene m&aacute;s peso que el de Juan. Porque esa misma tarea que el Padre me ha encomendado que lleve a cabo, y que estoy haciendo, es la que testifica que el Padre me ha enviado.<sup class="versenum">37&nbsp;</sup>Y el Padre mismo que me envi&oacute; ha testificado en mi favor. Ustedes nunca han o&iacute;do su voz, ni visto su figura,<sup class="versenum">38&nbsp;</sup>ni vive su palabra en ustedes, porque no creen en aquel a quien &eacute;l envi&oacute;.<sup class="versenum">39&nbsp;</sup>Ustedes estudian con diligencia las Escrituras porque piensan que en ellas hallan la vida eterna. &iexcl;Y son ellas las que dan testimonio en mi favor!<sup class="versenum">40&nbsp;</sup>Sin embargo, ustedes no quieren venir a m&iacute; para tener esa vida.</p>

<p><sup class="versenum">41&nbsp;</sup>&raquo;La gloria humana no la acepto,<sup class="versenum">42&nbsp;</sup>pero a ustedes los conozco, y s&eacute; que no aman realmente a Dios.<sup class="versenum">43&nbsp;</sup>Yo he venido en nombre de mi Padre, y ustedes no me aceptan; pero, si otro viniera por su propia cuenta, a ese s&iacute; lo aceptar&iacute;an.<sup class="versenum">44&nbsp;</sup>&iquest;C&oacute;mo va a ser posible que ustedes crean, si unos a otros se rinden gloria, pero no buscan la gloria que viene del Dios &uacute;nico?</p>

<p><sup class="versenum">45&nbsp;</sup>&raquo;Pero no piensen que yo voy a acusarlos delante del Padre. Quien los va a acusar es Mois&eacute;s, en quien tienen puesta su esperanza.<sup class="versenum">46&nbsp;</sup>Si le creyeran a Mois&eacute;s, me creer&iacute;an a m&iacute;, porque de m&iacute; escribi&oacute; &eacute;l.<sup class="versenum">47&nbsp;</sup>Pero, si no creen lo que &eacute;l escribi&oacute;, &iquest;c&oacute;mo van a creer mis palabras?&raquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/225.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 5:16-47&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discusi&oacute;n de descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;Por qu&eacute;?</li>
	<li>&iquest;Hay algo nuevo o algo que ha desarrollado hasta este punto de la historia de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendemos acerca de la humanidad o divinidad de Jes&uacute;s en este pasaje?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p><em>Preguntas adicionales que puede utilizar:</em></p>

<ul>
	<li>&iquest;Qu&eacute; est&aacute;n aprendiendo sus seguidores?</li>
	<li>&iquest;Qu&eacute; es lo que Jes&uacute;s nos est&aacute; modelando acerca de la vida, el ministerio o el liderazgo piadoso?</li>
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
<p class="up">Jes&uacute;s estaba afirmando que Dios era Su verdadero Padre y que &Eacute;l y Dios eran iguales. Jes&uacute;s se refiere a cinco testigos para apoyar su afirmaci&oacute;n:</p>

<ol>
	<li class="up">La propia reclamaci&oacute;n de Jes&uacute;s (v19-31).</li>
	<li class="up">El testimonio de Juan el Bautista (v33-35).</li>
	<li class="up">Jes&uacute;s Obra (v36).</li>
	<li class="up">La voz del Padre (v37-38) en su Bautismo.</li>
	<li class="up">Las Escrituras del Antiguo Testamento (v39-47).</li>
</ol>

<ul>
</ul>

<p>&nbsp;</p>
</div>

<p><em>Practique la entrega y la comuni&oacute;n aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p class="up">Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:</p>

<ul class="forward">
	<li class="up">Orar, Cuidar, Compartir</li>
	<li class="up">Compartir el Evangelio</li>
	<li class="up">Estudios B&iacute;blicos Fundacionales</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba sus declaraciones de &ldquo;Yo har&eacute;&hellip;para cuando&hellip;&rdquo; y comp&aacute;rtala en su peque&ntilde;o grupo.</li>
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
	<li>Comprometa las metas de todos con el Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y &uacute;sanos para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Jesús, El que dice la verdad: ', '/content/M2/spa/multiply2/multiply225.html')">
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