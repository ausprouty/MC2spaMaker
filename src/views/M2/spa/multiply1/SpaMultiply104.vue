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
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>Identificarse audazmente con Jesús</h1></div>
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
<p class="back"><em>Lee un pasaje de las Escrituras para comenzar a sentar las bases de la adoraci&oacute;n y la alabanza.</em></p>

<ul>
	<li class="back">Ejemplo: Salmo 29:2 &quot; Honren al Se&ntilde;or por la gloria de su nombre; adoren al Se&ntilde;or en la magnificencia de su santidad&rdquo;. Hagamos una pausa y honr&eacute;mosle al Se&ntilde;or alabando a &Eacute;l.</li>
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
	<li class="nobreak-final-final">Ejemplo: El Se&ntilde;or no s&oacute;lo nos ama, sino que tiene una visi&oacute;n para nuestras vidas. &iquest;Cu&aacute;l es esa visi&oacute;n? Es ser como Cristo. <span class="popup-link" @click = "popUp('pop1')"> Romanos 8:29</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">29&nbsp;</sup>Porque a los que Dios conoci&oacute; de antemano, tambi&eacute;n los predestin&oacute; a ser transformados seg&uacute;n la imagen de su Hijo, para que &eacute;l sea el primog&eacute;nito entre muchos hermanos.</p>
	<!-- end bible --></div>
	dice que Su plan es que todos nos conformemos a la imagen de Cristo, para experimentar y reflejar al Padre como lo hizo Cristo. Y la gran noticia es que esta obra de semejanza a Cristo es la obra de Dios. <span class="popup-link" @click = "popUp('pop2')"> Filipenses 1:6</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">6&nbsp;</sup>Estoy convencido de esto: el que comenz&oacute; tan buena obra en ustedes la ir&aacute; perfeccionando hasta el d&iacute;a de Cristo Jes&uacute;s.</p>
	<!-- end bible --></div>
	promete que Aquel que comenz&oacute; esta buena obra en ti, &iexcl;ser&aacute; fiel para completarlo! Anim&eacute;monos unos a otros a que Dios obrar&aacute; en su vida para llegar a ser como Cristo.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Un seguidor de Jes&uacute;s llamado Felipe hab&iacute;a estado compartiendo el evangelio con la gente en un &aacute;rea de Israel llamada Samaria. El Se&ntilde;or interrumpi&oacute; su ministerio y le dijo que fuera hacia el sur por el camino que conduce hacia Egipto. Cuando lleg&oacute;, encontr&oacute; a un l&iacute;der africano que viajaba de regreso a su pa&iacute;s de origen. Esta historia nos cuenta lo que sucedi&oacute;.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 8:34-40</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 8:34-40</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">34&nbsp;</sup>&mdash;D&iacute;game usted, por favor, &iquest;de qui&eacute;n habla aqu&iacute; el profeta, de s&iacute; mismo o de alg&uacute;n otro? &mdash;le pregunt&oacute; el eunuco a Felipe.</p>

<p><sup class="versenum">35&nbsp;</sup>Entonces Felipe, comenzando con ese mismo pasaje de la Escritura, le anunci&oacute; las buenas nuevas acerca de Jes&uacute;s.<sup class="versenum">36&nbsp;</sup>Mientras iban por el camino, llegaron a un lugar donde hab&iacute;a agua, y dijo el eunuco:</p>

<p>&mdash;Mire usted, aqu&iacute; hay agua. &iquest;Qu&eacute; impide que yo sea bautizado?</p>

<p><sup class="versenum">38&nbsp;</sup>Entonces mand&oacute; parar la carroza, y ambos bajaron al agua, y Felipe lo bautiz&oacute;.<sup class="versenum">39&nbsp;</sup>Cuando subieron del agua, el Esp&iacute;ritu del Se&ntilde;or se llev&oacute; de repente a Felipe. El eunuco no volvi&oacute; a verlo, pero sigui&oacute; alegre su camino.<sup class="versenum">40&nbsp;</sup>En cuanto a Felipe, apareci&oacute; en Azoto, y se fue predicando el evangelio en todos los pueblos hasta que lleg&oacute; a Cesarea.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/104.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 8:34-40&nbsp;</button>
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
<ul>
	<li class="nobreak-final-final">Lea <span class="popup-link" @click = "popUp('pop3')"> Mateo 3:13-17</span>.&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>Un d&iacute;a Jes&uacute;s fue de Galilea al Jord&aacute;n para que Juan lo bautizara.<sup class="versenum">14&nbsp;</sup>Pero Juan trat&oacute; de disuadirlo.</p>

	<p>&mdash;Yo soy el que necesita ser bautizado por ti, &iquest;y t&uacute; vienes a m&iacute;? &mdash;objet&oacute;.</p>

	<p><sup class="versenum">15&nbsp;</sup>&mdash;Hag&aacute;moslo como te digo, pues nos conviene cumplir con lo que es justo &mdash;le contest&oacute; Jes&uacute;s.</p>

	<p>Entonces Juan consinti&oacute;.</p>

	<p><sup class="versenum">16&nbsp;</sup>Tan pronto como Jes&uacute;s fue bautizado, subi&oacute; del agua. En ese momento se abri&oacute; el cielo, y &eacute;l vio al Esp&iacute;ritu de Dios bajar como una paloma y posarse sobre &eacute;l.<sup class="versenum">17&nbsp;</sup>Y una voz del cielo dec&iacute;a: &laquo;Este es mi Hijo amado; estoy muy complacido con &eacute;l&raquo;.</p>
	<!-- end bible --></div>
	&nbsp;Jes&uacute;s mismo fue bautizado y lo model&oacute; a Sus seguidores. Desde el tiempo de Cristo, todos los que comienzan a seguirlo han hecho este compromiso. Nuestra voluntad de bautizarnos muestra a los dem&aacute;s que ha habido un cambio real en las vidas. Simboliza nuestra identificaci&oacute;n con la muerte y resurrecci&oacute;n de Jes&uacute;s (<span class="popup-link" @click = "popUp('pop4')"> Romanos 6:4-5</span>).

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>Por tanto, mediante el bautismo fuimos sepultados con &eacute;l en su muerte, a fin de que, as&iacute; como Cristo resucit&oacute; por el poder del Padre, tambi&eacute;n nosotros llevemos una vida nueva.</p>

	<p><sup class="versenum">5&nbsp;</sup>En efecto, si hemos estado unidos con &eacute;l en su muerte, sin duda tambi&eacute;n estaremos unidos con &eacute;l en su resurrecci&oacute;n.</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique iniciar una conversaci&oacute;n, compartir el Evangelio o comenzar el proceso de seguimiento.</li>
	<li>Recu&eacute;rdeles qu&eacute; hacer cuando alguien dice S&Iacute; al Evangelio.</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>P&iacute;deles que identifiquen a 5 personas de su Lista Oikos a las que les contar&aacute;s la historia o con las que compartir&aacute;s el Evangelio esta semana.</li>
	<li>Si alguien quiere ser bautizado, establezca una hora para hacer esto.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo;y que lo compartan con su grupo.</li>
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

			<td class="social" @click="share('lesson', 'Identificarse audazmente con Jesús: ', '/content/M2/spa/multiply1/multiply104.html')">
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