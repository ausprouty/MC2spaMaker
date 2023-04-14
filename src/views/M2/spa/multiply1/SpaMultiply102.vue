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
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>Relación y compañerismo</h1></div>
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
	<li class="back">Ejemplo: Salmo 48:9 &quot;Oh Dios, meditamos en tu amor inagotable mientras adoramos en tu templo&quot;. Hagamos una pausa y le digamos a Jes&uacute;s lo agradecidos que estamos por Su amor por nosotros.</li>
</ul>

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
	<li>Pregunta: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tu declaraci&oacute;n: &ldquo;Yo har&eacute;&hellip;&rdquo;?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y Animo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p class="back"><em>Proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos.</em></p>

<ul>
	<li class="nobreak-final-final">Ejemplo: Cuando aceptamos a Cristo, nuestras vidas cambian para siempre. <span class="popup-link" @click = "popUp('pop1')"> 2 Corintios 5:17 </span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">17&nbsp;</sup>Por lo tanto, si alguno est&aacute; en Cristo, es una nueva creaci&oacute;n. &iexcl;Lo viejo ha pasado, ha llegado ya lo nuevo!</p>
	<!-- end bible --></div>
	dice, cualquiera que pertenezca a Cristo es una nueva creaci&oacute;n, la vieja vida se ha ido y una nueva vida ha comenzado! &iexcl;Ese somos nosotros! Somos nuevas creaciones y a medida que seguimos a Cristo, nuestras vidas continuar&aacute;n cambiando para estar llenas de prop&oacute;sito y significado. Anim&eacute;monos unos a otros con esta verdad mientras viajamos juntos en esta nueva vida</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Aquellos que eran despreciados por la sociedad estaban respondiendo a la ense&ntilde;anza de Jes&uacute;s. Los l&iacute;deres religiosos (fariseos) y a los maestros de la ley religiosa no les gustaba que Jes&uacute;s se asociara con estas personas. As&iacute; que Jes&uacute;s le conto una historia acerca de un hijo perdido para explicar el coraz&oacute;n de Dios hacia los pecadores.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Lucas 15:11-24</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 15:11-24</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Par&aacute;bola del hijo perdido</h3>

<p><sup class="versenum">11&nbsp;</sup>&raquo;Un hombre ten&iacute;a dos hijos &mdash;continu&oacute; Jes&uacute;s&mdash;.<sup class="versenum">12&nbsp;</sup>El menor de ellos le dijo a su padre: &ldquo;Pap&aacute;, dame lo que me toca de la herencia&rdquo;. As&iacute; que el padre reparti&oacute; sus bienes entre los dos.<sup class="versenum">13&nbsp;</sup>Poco despu&eacute;s el hijo menor junt&oacute; todo lo que ten&iacute;a y se fue a un pa&iacute;s lejano; all&iacute; vivi&oacute; desenfrenadamente y derroch&oacute; su herencia.</p>

<p><sup class="versenum">14&nbsp;</sup>&raquo;Cuando ya lo hab&iacute;a gastado todo, sobrevino una gran escasez en la regi&oacute;n, y &eacute;l comenz&oacute; a pasar necesidad.<sup class="versenum">15&nbsp;</sup>As&iacute; que fue y consigui&oacute; empleo con un ciudadano de aquel pa&iacute;s, quien lo mand&oacute; a sus campos a cuidar cerdos.<sup class="versenum">16&nbsp;</sup>Tanta hambre ten&iacute;a que hubiera querido llenarse el est&oacute;mago con la comida que daban a los cerdos, pero aun as&iacute; nadie le daba nada.<sup class="versenum">17&nbsp;</sup>Por fin recapacit&oacute; y se dijo: &ldquo;&iexcl;Cu&aacute;ntos jornaleros de mi padre tienen comida de sobra, y yo aqu&iacute; me muero de hambre!<sup class="versenum">18&nbsp;</sup>Tengo que volver a mi padre y decirle: Pap&aacute;, he pecado contra el cielo y contra ti.<sup class="versenum">19&nbsp;</sup>Ya no merezco que se me llame tu hijo; tr&aacute;tame como si fuera uno de tus jornaleros&rdquo;.<sup class="versenum">20&nbsp;</sup>As&iacute; que emprendi&oacute; el viaje y se fue a su padre.</p>

<p>&raquo;Todav&iacute;a estaba lejos cuando su padre lo vio y se compadeci&oacute; de &eacute;l; sali&oacute; corriendo a su encuentro, lo abraz&oacute; y lo bes&oacute;.<sup class="versenum">21&nbsp;</sup>El joven le dijo: &ldquo;Pap&aacute;, he pecado contra el cielo y contra ti. Ya no merezco que se me llame tu hijo&rdquo;.<sup class="versenum">22&nbsp;</sup>Pero el padre orden&oacute; a sus siervos: &ldquo;&iexcl;Pronto! Traigan la mejor ropa para vestirlo. P&oacute;nganle tambi&eacute;n un anillo en el dedo y sandalias en los pies.<sup class="versenum">23&nbsp;</sup>Traigan el ternero m&aacute;s gordo y m&aacute;tenlo para celebrar un banquete.<sup class="versenum">24&nbsp;</sup>Porque este hijo m&iacute;o estaba muerto, pero ahora ha vuelto a la vida; se hab&iacute;a perdido, pero ya lo hemos encontrado&rdquo;. As&iacute; que empezaron a hacer fiesta.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/102.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 15:11-24&nbsp;</button>
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
<p class="up">Nuestro Padre celestial est&aacute; dispuesto a perdonar los pecados de Sus hijos. Nuestro pecado no cambia el hecho de que Dios es nuestro Padre. Pero el pecado tiene consecuencias y afecta nuestra comuni&oacute;n con Dios. No disfrutamos de nuestro Padre.1 Juan 1:9 nos asegura, &quot;Si confesamos nuestros pecados, &eacute;l es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>P&iacute;deles que revisen su lista Oikos y agreguen personas si es necesario</li>
	<li>P&iacute;dales que practiquen compartir el Evangelio y guiar a alguien a orar para recibir a Cristo</li>
	<li>Recu&eacute;rdeles qu&eacute; hacer cuando alguien dice S&Iacute; al Evangelio.</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>P&iacute;dales que identifiquen a 5 personas de tu Lista Oikos a las que les contar&aacute;s la historia o con las que compartir&aacute;s el Evangelio esta semana. (use la declaraci&oacute;n: &quot;Yo har&eacute;&hellip;&hellip;. cuando&hellip;&rdquo;).</li>
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

<div class="for-enrichment">Para un mayor enriquecimiento: <!-- begin linkInternal capacitor-->
<span id= "Return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/spa/tc/tc02', '#1')">
    Lea el concepto transferible #2: C&oacute;mo puede usted experimentar el amor y perd&oacute;n de Dios? 
</span>
<!-- end linkInternal capacitor-->
, comparta lo aprendido con otro miembro del grupo.</div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Relación y compañerismo: ', '/content/M2/spa/multiply1/multiply102.html')">
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