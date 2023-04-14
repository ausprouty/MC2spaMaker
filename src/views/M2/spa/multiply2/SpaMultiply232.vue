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
                        <div class="chapter_number ltr"><h1>32.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo y fe</h1></div>
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
	<li class="back">Lea o vea <strong>Marcos 4:35-41</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Marcos 4:35-41</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s calma la tormenta</h3>

<p><sup class="versenum">35&nbsp;</sup>Ese d&iacute;a al anochecer, les dijo a sus disc&iacute;pulos:</p>

<p>&mdash;Crucemos al otro lado.</p>

<p><sup class="versenum">36&nbsp;</sup>Dejaron a la multitud y se fueron con &eacute;l en la barca donde estaba. Tambi&eacute;n lo acompa&ntilde;aban otras barcas.<sup class="versenum">37&nbsp;</sup>Se desat&oacute; entonces una fuerte tormenta, y las olas azotaban la barca, tanto que ya comenzaba a inundarse.<sup class="versenum">38&nbsp;</sup>Jes&uacute;s, mientras tanto, estaba en la popa, durmiendo sobre un cabezal, as&iacute; que los disc&iacute;pulos lo despertaron.</p>

<p>&mdash;&iexcl;Maestro! &mdash;gritaron&mdash;, &iquest;no te importa que nos ahoguemos?</p>

<p><sup class="versenum">39&nbsp;</sup>&Eacute;l se levant&oacute;, reprendi&oacute; al viento y orden&oacute; al mar:</p>

<p>&mdash;&iexcl;Silencio! &iexcl;C&aacute;lmate!</p>

<p>El viento se calm&oacute; y todo qued&oacute; completamente tranquilo.</p>

<p><sup class="versenum">40&nbsp;</sup>&mdash;&iquest;Por qu&eacute; tienen tanto miedo? &mdash;dijo a sus disc&iacute;pulos&mdash;. &iquest;Todav&iacute;a no tienen fe?</p>

<p><sup class="versenum">41&nbsp;</sup>Ellos estaban espantados y se dec&iacute;an unos a otros:</p>

<p>&mdash;&iquest;Qui&eacute;n es este, que hasta el viento y el mar le obedecen?</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/232.mp4" type="button" class="external-movie">
         Mira &nbsp;Marcos 4:35-41&nbsp;</button>
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
<ul>
	<li class="nobreak-final-final">A medida que el movimiento crec&iacute;a, Jes&uacute;s tuvo dificultades para encontrar un lugar para descansar sin ser molestado. &iexcl;Estaba tan cansado que durmi&oacute; a trav&eacute;s de una tormenta en el lago! S&iacute;, Jes&uacute;s se cans&oacute; como nosotros. &Eacute;l era completamente humano y lleg&oacute; a ser como nosotros, Sus propias creaciones (<span class="popup-link" @click = "popUp('pop3')"> Hebreos 2:17</span>).&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>Por eso era preciso que en todo se asemejara a sus hermanos, para ser un sumo sacerdote fiel y misericordioso al servicio de Dios, a fin de expiar los pecados del pueblo.</p>
	<!-- end bible --></div>
	Jes&uacute;s comenz&oacute; a usar el lago de Galilea como un lugar para escapar y descansar con sus l&iacute;deres. Un fuerte viento y una furiosa tormenta trajeron agua al barco. Los nuevos l&iacute;deres fueron golpeados con temor y clamaron a Jes&uacute;s por ayuda. Los reprendi&oacute; por no tener fe. &Eacute;l esperaba que confiaran en que &Eacute;l no dejar&iacute;a que el da&ntilde;o les llegara.
</li>

	<li class="nobreak-final-final">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop4')"> Lucas 8:22-25</span>;&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">22&nbsp;</sup>Un d&iacute;a subi&oacute; Jes&uacute;s con sus disc&iacute;pulos a una barca.</p>

	<p>&mdash;Crucemos al otro lado del lago &mdash;les dijo.</p>

	<p>As&iacute; que partieron,<sup class="versenum">23&nbsp;</sup>y mientras navegaban, &eacute;l se durmi&oacute;. Entonces se desat&oacute; una tormenta sobre el lago, de modo que la barca comenz&oacute; a inundarse y corr&iacute;an gran peligro.</p>

	<p><sup class="versenum">24&nbsp;</sup>Los disc&iacute;pulos fueron a despertarlo.</p>

	<p>&mdash;&iexcl;Maestro, Maestro, nos vamos a ahogar! &mdash;gritaron.</p>

	<p>&Eacute;l se levant&oacute; y reprendi&oacute; al viento y a las olas; la tormenta se apacigu&oacute; y todo qued&oacute; tranquilo.</p>

	<p><sup class="versenum">25&nbsp;</sup>&mdash;&iquest;D&oacute;nde est&aacute; la fe de ustedes? &mdash;les dijo a sus disc&iacute;pulos.</p>

	<p>Con temor y asombro ellos se dec&iacute;an unos a otros: &laquo;&iquest;Qui&eacute;n es este, que manda aun a los vientos y al agua, y le obedecen?&raquo;</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> Mateo 8:18-27</span>.&nbsp;

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<h3>Lo que cuesta seguir a Jes&uacute;s</h3>

	<p><sup class="versenum">18&nbsp;</sup>Cuando Jes&uacute;s vio a la multitud que lo rodeaba, dio orden de pasar al otro lado del lago.<sup class="versenum">19&nbsp;</sup>Se le acerc&oacute; un maestro de la ley y le dijo:</p>

	<p>&mdash;Maestro, te seguir&eacute; a dondequiera que vayas.</p>

	<p><sup class="versenum">20&nbsp;</sup>&mdash;Las zorras tienen madrigueras y las aves tienen nidos &mdash;le respondi&oacute; Jes&uacute;s&mdash;, pero el Hijo del hombre no tiene d&oacute;nde recostar la cabeza.</p>

	<p><sup class="versenum">21&nbsp;</sup>Otro disc&iacute;pulo le pidi&oacute;:</p>

	<p>&mdash;Se&ntilde;or, primero d&eacute;jame ir a enterrar a mi padre.</p>

	<p><sup class="versenum">22&nbsp;</sup>&mdash;S&iacute;gueme &mdash;le replic&oacute; Jes&uacute;s&mdash;, y deja que los muertos entierren a sus muertos.</p>

	<p><sup class="versenum">23&nbsp;</sup>Luego subi&oacute; a la barca y sus disc&iacute;pulos lo siguieron.<sup class="versenum">24&nbsp;</sup>De repente, se levant&oacute; en el lago una tormenta tan fuerte que las olas inundaban la barca. Pero Jes&uacute;s estaba dormido.<sup class="versenum">25&nbsp;</sup>Los disc&iacute;pulos fueron a despertarlo.</p>

	<p>&mdash;&iexcl;Se&ntilde;or &mdash;gritaron&mdash;, s&aacute;lvanos, que nos vamos a ahogar!</p>

	<p><sup class="versenum">26&nbsp;</sup>&mdash;Hombres de poca fe &mdash;les contest&oacute;&mdash;, &iquest;por qu&eacute; tienen tanto miedo?</p>

	<p>Entonces se levant&oacute; y reprendi&oacute; a los vientos y a las olas, y todo qued&oacute; completamente tranquilo.</p>

	<p><sup class="versenum">27&nbsp;</sup>Los disc&iacute;pulos no sal&iacute;an de su asombro, y dec&iacute;an: &laquo;&iquest;Qu&eacute; clase de hombre es este, que hasta los vientos y las olas le obedecen?&raquo;</p>
	<!-- end bible --></div>
	</li>
</ul>
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

			<td class="social" @click="share('lesson', 'Liderazgo y fe: ', '/content/M2/spa/multiply2/multiply232.html')">
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