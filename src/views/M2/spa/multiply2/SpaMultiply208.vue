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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>Venid y ve; Sígueme</h1></div>
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
	<li class="back">Lea o vea <strong>Juan 1:19-51</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 1:19-51</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Juan el Bautista niega ser el Cristo</h3>

<p><sup class="versenum">19&nbsp;</sup>Este es el testimonio de Juan cuando los jud&iacute;os de Jerusal&eacute;n enviaron sacerdotes y levitas a preguntarle qui&eacute;n era.<sup class="versenum">20&nbsp;</sup>No se neg&oacute; a declararlo, sino que confes&oacute; con franqueza:</p>

<p>&mdash;Yo no soy el Cristo.</p>

<p><sup class="versenum">21&nbsp;</sup>&mdash;&iquest;Qui&eacute;n eres entonces? &mdash;le preguntaron&mdash;. &iquest;Acaso eres El&iacute;as?</p>

<p>&mdash;No lo soy.</p>

<p>&mdash;&iquest;Eres el profeta?</p>

<p>&mdash;No lo soy.</p>

<p><sup class="versenum">22&nbsp;</sup>&mdash;&iquest;Entonces qui&eacute;n eres? &iexcl;Tenemos que llevar una respuesta a los que nos enviaron! &iquest;C&oacute;mo te ves a ti mismo?</p>

<p><sup class="versenum">23&nbsp;</sup>&mdash;Yo soy la voz del que grita en el desierto: &ldquo;Enderecen el camino del Se&ntilde;or&rdquo; &mdash;respondi&oacute; Juan, con las palabras del profeta Isa&iacute;as.</p>

<p><sup class="versenum">24&nbsp;</sup>Algunos que hab&iacute;an sido enviados por los fariseos<sup class="versenum">25&nbsp;</sup>lo interrogaron:</p>

<p>&mdash;Pues, si no eres el Cristo ni El&iacute;as ni el profeta, &iquest;por qu&eacute; bautizas?</p>

<p><sup class="versenum">26&nbsp;</sup>&mdash;Yo bautizo con agua, pero entre ustedes hay alguien a quien no conocen,<sup class="versenum">27&nbsp;</sup>y que viene despu&eacute;s de m&iacute;, al cual yo no soy digno ni siquiera de desatarle la correa de las sandalias.</p>

<p><sup class="versenum">28&nbsp;</sup>Todo esto sucedi&oacute; en Betania, al otro lado del r&iacute;o Jord&aacute;n, donde Juan estaba bautizando.</p>

<h3>Jes&uacute;s, el Cordero de Dios</h3>

<p><sup class="versenum">29&nbsp;</sup>Al d&iacute;a siguiente Juan vio a Jes&uacute;s que se acercaba a &eacute;l, y dijo: &laquo;&iexcl;Aqu&iacute; tienen al Cordero de Dios, que quita el pecado del mundo!<sup class="versenum">30&nbsp;</sup>De este hablaba yo cuando dije: &ldquo;Despu&eacute;s de m&iacute; viene un hombre que es superior a m&iacute;, porque exist&iacute;a antes que yo&rdquo;.<sup class="versenum">31&nbsp;</sup>Yo ni siquiera lo conoc&iacute;a, pero, para que &eacute;l se revelara al pueblo de Israel, vine bautizando con agua&raquo;.</p>

<p><sup class="versenum">32&nbsp;</sup>Juan declar&oacute;: &laquo;Vi al Esp&iacute;ritu descender del cielo como una paloma y permanecer sobre &eacute;l.<sup class="versenum">33&nbsp;</sup>Yo mismo no lo conoc&iacute;a, pero el que me envi&oacute; a bautizar con agua me dijo: &ldquo;Aquel sobre quien veas que el Esp&iacute;ritu desciende y permanece es el que bautiza con el Esp&iacute;ritu Santo&rdquo;.<sup class="versenum">34&nbsp;</sup>Yo lo he visto y por eso testifico que este es el Hijo de Dios&raquo;.</p>

<h3>Los primeros disc&iacute;pulos de Jes&uacute;s</h3>

<p><sup class="versenum">35&nbsp;</sup>Al d&iacute;a siguiente Juan estaba de nuevo all&iacute;, con dos de sus disc&iacute;pulos.<sup class="versenum">36&nbsp;</sup>Al ver a Jes&uacute;s que pasaba por ah&iacute;, dijo:</p>

<p>&mdash;&iexcl;Aqu&iacute; tienen al Cordero de Dios!</p>

<p><sup class="versenum">37&nbsp;</sup>Cuando los dos disc&iacute;pulos le oyeron decir esto, siguieron a Jes&uacute;s.<sup class="versenum">38&nbsp;</sup>Jes&uacute;s se volvi&oacute; y, al ver que lo segu&iacute;an, les pregunt&oacute;:</p>

<p>&mdash;&iquest;Qu&eacute; buscan?</p>

<p>&mdash;Rab&iacute;, &iquest;d&oacute;nde te hospedas? (Rab&iacute; significa: Maestro).</p>

<p><sup class="versenum">39&nbsp;</sup>&mdash;Vengan a ver &mdash;les contest&oacute; Jes&uacute;s.</p>

<p>Ellos fueron, pues, y vieron d&oacute;nde se hospedaba, y aquel mismo d&iacute;a se quedaron con &eacute;l. Eran como las cuatro de la tarde.</p>

<p><sup class="versenum">40&nbsp;</sup>Andr&eacute;s, hermano de Sim&oacute;n Pedro, era uno de los dos que, al o&iacute;r a Juan, hab&iacute;an seguido a Jes&uacute;s.<sup class="versenum">41&nbsp;</sup>Andr&eacute;s encontr&oacute; primero a su hermano Sim&oacute;n, y le dijo:</p>

<p>&mdash;Hemos encontrado al Mes&iacute;as (es decir, el Cristo).</p>

<p><sup class="versenum">42&nbsp;</sup>Luego lo llev&oacute; a Jes&uacute;s, quien, mir&aacute;ndolo fijamente, le dijo:</p>

<p>&mdash;T&uacute; eres Sim&oacute;n, hijo de Juan. Ser&aacute;s llamado Cefas (es decir, Pedro).</p>

<h3>Jes&uacute;s llama a Felipe y a Natanael</h3>

<p><sup class="versenum">43&nbsp;</sup>Al d&iacute;a siguiente, Jes&uacute;s decidi&oacute; salir hacia Galilea. Se encontr&oacute; con Felipe, y lo llam&oacute;:</p>

<p>&mdash;S&iacute;gueme.</p>

<p><sup class="versenum">44&nbsp;</sup>Felipe era del pueblo de Betsaida, lo mismo que Andr&eacute;s y Pedro.<sup class="versenum">45&nbsp;</sup>Felipe busc&oacute; a Natanael y le dijo:</p>

<p>&mdash;Hemos encontrado a Jes&uacute;s de Nazaret, el hijo de Jos&eacute;, aquel de quien escribi&oacute; Mois&eacute;s en la ley, y de quien escribieron los profetas.</p>

<p><sup class="versenum">46&nbsp;</sup>&mdash;&iexcl;De Nazaret! &mdash;replic&oacute; Natanael&mdash;. &iquest;Acaso de all&iacute; puede salir algo bueno?</p>

<p>&mdash;Ven a ver &mdash;le contest&oacute; Felipe.</p>

<p><sup class="versenum">47&nbsp;</sup>Cuando Jes&uacute;s vio que Natanael se le acercaba, coment&oacute;:</p>

<p>&mdash;Aqu&iacute; tienen a un verdadero israelita, en quien no hay falsedad.</p>

<p><sup class="versenum">48&nbsp;</sup>&mdash;&iquest;De d&oacute;nde me conoces? &mdash;le pregunt&oacute; Natanael.</p>

<p>&mdash;Antes de que Felipe te llamara, cuando a&uacute;n estabas bajo la higuera, ya te hab&iacute;a visto.</p>

<p><sup class="versenum">49&nbsp;</sup>&mdash;Rab&iacute;, &iexcl;t&uacute; eres el Hijo de Dios! &iexcl;T&uacute; eres el Rey de Israel! &mdash;declar&oacute; Natanael.</p>

<p><sup class="versenum">50&nbsp;</sup>&mdash;&iquest;Lo crees porque te dije que te vi cuando estabas debajo de la higuera? &iexcl;Vas a ver aun cosas m&aacute;s grandes que estas!</p>

<p>Y a&ntilde;adi&oacute;:</p>

<p><sup class="versenum">51&nbsp;</sup>&mdash;Ciertamente les aseguro que ustedes ver&aacute;n abrirse el cielo, y a los &aacute;ngeles de Dios subir y bajar sobre el Hijo del hombre.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/208.mp4" type="button" class="external-movie">
         Mira Juan 1:19-51</button>
    <div class="collapsed"></div>




<h2 class="up">&nbsp;</h2>

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
<p class="up">Despu&eacute;s de 40 d&iacute;as en el desierto, Jes&uacute;s comienza su misi&oacute;n de hacer disc&iacute;pulos. &Eacute;l comienza a modelarnos un estilo de vida de ministerio usando redes relacionales. Andr&eacute;s, Pedro, Juan, Felipe y Natanael se conoc&iacute;an. &Eacute;l comienza llamando a la gente a &quot;venir y ver&quot; (venga e investigue los hechos acerca de qui&eacute;nes &Eacute;l). Luego les abre los ojos a la verdad de que &Eacute;l es el Mes&iacute;as prometido. Como ellos creen, &Eacute;l cambia Su mensaje para &quot;s&iacute;gueme&quot;. Dos llamadas, una a los que a&uacute;n no han cre&iacute;do y otra a los que creen.</p>

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

			<td class="social" @click="share('lesson', 'Venid y ve; Sígueme: ', '/content/M2/spa/multiply2/multiply208.html')">
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