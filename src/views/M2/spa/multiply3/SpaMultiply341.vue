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
                        <div class="chapter_number ltr"><h1>41.</h1></div>
                        <div class="chapter_title ltr"><h1>Visitas para fortalecer las iglesias (Macedonia y Acaya)</h1></div>
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

<p class="back">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (Filipenses 2:11b; 1 Timoteo 2:4-6a)</p>

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
	<li class="back">Lea o vea <strong>Hechos 20:1-12</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 20:1-12</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Recorrido por Macedonia y Grecia</h3>

<p><sup class="versenum">1 </sup>Cuando ces&oacute; el alboroto, Pablo mand&oacute; llamar a los disc&iacute;pulos y, despu&eacute;s de animarlos, se despidi&oacute; y sali&oacute; rumbo a Macedonia.<sup class="versenum">2&nbsp;</sup>Recorri&oacute; aquellas regiones, alentando a los creyentes en muchas ocasiones, y por fin lleg&oacute; a Grecia,<sup class="versenum">3&nbsp;</sup>donde se qued&oacute; tres meses. Como los jud&iacute;os tramaban un atentado contra &eacute;l cuando estaba a punto de embarcarse para Siria, decidi&oacute; regresar por Macedonia.<sup class="versenum">4&nbsp;</sup>Lo acompa&ntilde;aron S&oacute;pater hijo de Pirro, de Berea; Aristarco y Segundo, de Tesal&oacute;nica; Gayo, de Derbe; Timoteo; y por &uacute;ltimo, T&iacute;quico y Tr&oacute;fimo, de la provincia de Asia.<sup class="versenum">5&nbsp;</sup>Estos se adelantaron y nos esperaron en Troas.<sup class="versenum">6&nbsp;</sup>Pero nosotros zarpamos de Filipos despu&eacute;s de la fiesta de los Panes sin levadura, y a los cinco d&iacute;as nos reunimos con los otros en Troas, donde pasamos siete d&iacute;as.</p>

<h3>Visita de Pablo a Troas</h3>

<p><sup class="versenum">7&nbsp;</sup>El primer d&iacute;a de la semana nos reunimos para partir el pan. Como iba a salir al d&iacute;a siguiente, Pablo estuvo hablando a los creyentes, y prolong&oacute; su discurso hasta la medianoche.<sup class="versenum">8&nbsp;</sup>En el cuarto del piso superior donde est&aacute;bamos reunidos hab&iacute;a muchas l&aacute;mparas.<sup class="versenum">9&nbsp;</sup>Un joven llamado Eutico, que estaba sentado en una ventana, comenz&oacute; a dormirse mientras Pablo alargaba su discurso. Cuando se qued&oacute; profundamente dormido, se cay&oacute; desde el tercer piso y lo recogieron muerto.<sup class="versenum">10&nbsp;</sup>Pablo baj&oacute;, se ech&oacute; sobre el joven y lo abraz&oacute;. &laquo;&iexcl;No se alarmen! &mdash;les dijo&mdash;. &iexcl;Est&aacute; vivo!&raquo;<sup class="versenum">11&nbsp;</sup>Luego volvi&oacute; a subir, parti&oacute; el pan y comi&oacute;. Sigui&oacute; hablando hasta el amanecer, y entonces se fue.<sup class="versenum">12&nbsp;</sup>Al joven se lo llevaron vivo a su casa, para gran consuelo de todos.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/341.mp4" type="button" class="external-movie">
         Mira Hechos 20:1-12</button>
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
<p class="up">Como era su pr&aacute;ctica, Pablo volvi&oacute; a visitar las iglesias que comenz&oacute; para animarlas y darles m&aacute;s ense&ntilde;anza. Primero fue a Macedonia para visitar las iglesias en las ciudades de Filipos, Tesal&oacute;nica y Berea. Durante su estancia, escribi&oacute; otra carta a los corintios. Despu&eacute;s de varios meses en Macedonia, Pablo viaj&oacute; a Acaya para visitar a los creyentes en Corinto. Antes de partir hacia Jerusal&eacute;n, escribi&oacute; una carta a las iglesias en Roma para informarles acerca de sus planes de viaje y para explicarles el Evangelio m&aacute;s profundamente (Romanos 1:11, 15:28). Vemos c&oacute;mo Pablo siempre estaba expandiendo su equipo de ministerio, desarrollando l&iacute;deres para la cosecha del campo de cosecha. Se mencionan siete personas que vinieron de otros centros de movimiento. Aprendemos de las cartas de Pablo que &eacute;l cre&oacute; la unidad entre las diferentes iglesias al recoger una ofrenda para ayudar a los pobres creyentes en Jerusal&eacute;n (2 Corintios 8:1- 7, Romanos 15:25-26). Vincul&oacute; a l&iacute;deres e iglesias para ayudarlos a ver que eran parte de un movimiento m&aacute;s grande (1 Tesalonicenses 1:14; 2 Tesalonicenses 1:4).</p>

<p class="up">La carta a los romanos se puede leer aqu&iacute;.</p>

<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

</div>

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

			<td class="social" @click="share('lesson', 'Visitas para fortalecer las iglesias (Macedonia y Acaya): ', '/content/M2/spa/multiply3/multiply341.html')">
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