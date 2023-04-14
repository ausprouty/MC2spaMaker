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
                        <div class="chapter_number ltr"><h1>11.</h1></div>
                        <div class="chapter_title ltr"><h1>Ser un testigo</h1></div>
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
	<li class="back">Ejemplo: Lea el <span class="popup-link" @click = "popUp('pop1')"> Salmo&nbsp;95:1-7</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<p><sup class="versenum">1 </sup>Vengan, cantemos con j&uacute;bilo al <span class="divine-name small-caps">Se&ntilde;or;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;aclamemos a la roca de nuestra salvaci&oacute;n.<br />
	<sup class="versenum">2&nbsp;</sup>Lleguemos ante &eacute;l con acci&oacute;n de gracias,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;aclam&eacute;moslo con c&aacute;nticos.</span></p>
	</div>

	<p><sup class="versenum">3&nbsp;</sup>Porque el <span class="divine-name small-caps">Se&ntilde;or es el gran Dios,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;el gran Rey sobre todos los dioses.<br />
	<sup class="versenum">4&nbsp;</sup>En sus manos est&aacute;n los abismos de la tierra;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;suyas son las cumbres de los montes.<br />
	<sup class="versenum">5&nbsp;</sup>Suyo es el mar, porque &eacute;l lo hizo;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;con sus manos form&oacute; la tierra firme.</span></p>
	</div>

	<p><sup class="versenum">6&nbsp;</sup>Vengan, postr&eacute;monos reverentes,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;doblemos la rodilla<br />
	&nbsp;&nbsp;&nbsp;&nbsp;ante el <span class="divine-name small-caps">Se&ntilde;or nuestro Hacedor.<br />
	<sup class="versenum">7&nbsp;</sup>Porque &eacute;l es nuestro Dios<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y nosotros somos el pueblo de su prado;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&iexcl;somos un reba&ntilde;o bajo su cuidado!</span></p>
	</div>

	<p>Si ustedes oyen hoy su voz,</p>
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
	<li class="nobreak-final-final">Ejemplo: En el libro de Hechos, vemos c&oacute;mo los creyentes entrenaron a otros para que fueran entrenadores de otros. Uno de los primeros seguidores de Jes&uacute;s fue un hombre llamado Bernab&eacute;. Encontr&oacute; a un nuevo creyente llamado Pablo y lo ayud&oacute;. Pablo encontr&oacute; a un joven creyente llamado Timoteo y llev&oacute; a Timoteo con &eacute;l para compartir el Evangelio en muchos lugares. M&aacute;s tarde, Pablo escribi&oacute; a Timoteo que deb&iacute;a entrenar a los hombres fieles en las iglesias para encontrar a otros cristianos m&aacute;s j&oacute;venes para entrenar. Lee <span class="popup-link" @click = "popUp('pop2')"> 2 Timoteo 2:2</span>.&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">2&nbsp;</sup>Lo que me has o&iacute;do decir en presencia de muchos testigos, encomi&eacute;ndalo a creyentes dignos de confianza, que a su vez est&eacute;n capacitados para ense&ntilde;ar a otros.</p>
	<!-- end bible --></div>
	Jes&uacute;s a Bernab&eacute; a Pablo a Timoteo a los hombres fieles a otros cristianos m&aacute;s j&oacute;venes. Todos los cristianos est&aacute;n llamados a entrenar a entrenadores que puedan entrenar a entrenadores para entrenar a otros. &iexcl;De esta manera el Evangelio se propaga r&aacute;pidamente!</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">Despu&eacute;s de que Jes&uacute;s resucit&oacute; de entre los muertos, continu&oacute; ense&ntilde;ando a Sus disc&iacute;pulos acerca del Reino de Dios. Durante Su &uacute;ltima reuni&oacute;n con ellos, reforz&oacute; la misi&oacute;n a la que estaban siendo llamados y acerca de la ayuda que se les proporcionar&iacute;a.</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 1:1-8</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 1:1-8</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s llevado al cielo</h3>

<p><sup class="versenum">1 </sup>Estimado Te&oacute;filo, en mi primer libro me refer&iacute; a todo lo que Jes&uacute;s comenz&oacute; a hacer y ense&ntilde;ar<sup class="versenum">2&nbsp;</sup>hasta el d&iacute;a en que fue llevado al cielo, luego de darles instrucciones por medio del Esp&iacute;ritu Santo a los ap&oacute;stoles que hab&iacute;a escogido.<sup class="versenum">3&nbsp;</sup>Despu&eacute;s de padecer la muerte, se les present&oacute; d&aacute;ndoles muchas pruebas convincentes de que estaba vivo. Durante cuarenta d&iacute;as se les apareci&oacute; y les habl&oacute; acerca del reino de Dios.<sup class="versenum">4&nbsp;</sup>Una vez, mientras com&iacute;a con ellos, les orden&oacute;:</p>

<p>&mdash;No se alejen de Jerusal&eacute;n, sino esperen la promesa del Padre, de la cual les he hablado:<sup class="versenum">5&nbsp;</sup>Juan bautiz&oacute; con agua, pero dentro de pocos d&iacute;as ustedes ser&aacute;n bautizados con el Esp&iacute;ritu Santo.</p>

<p><sup class="versenum">6&nbsp;</sup>Entonces los que estaban reunidos con &eacute;l le preguntaron:</p>

<p>&mdash;Se&ntilde;or, &iquest;es ahora cuando vas a restablecer el reino a Israel?</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;No les toca a ustedes conocer la hora ni el momento determinados por la autoridad misma del Padre &mdash;les contest&oacute; Jes&uacute;s&mdash;.<sup class="versenum">8&nbsp;</sup>Pero, cuando venga el Esp&iacute;ritu Santo sobre ustedes, recibir&aacute;n poder y ser&aacute;n mis testigos tanto en Jerusal&eacute;n como en toda Judea y Samaria, y hasta los confines de la tierra.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/111.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 1:1-8&nbsp;</button>
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
<p class="up">Seguir a Jes&uacute;s significa que obedeceremos Su mandato de ser Sus testigos. Pero s&oacute;lo podemos hacer lo que se necesita con la ayuda del poder del Esp&iacute;ritu Santo en nuestras vidas. S&oacute;lo, as&iacute; como &Eacute;l nos da poder, podemos ser testigos efectivos. El deseo de Dios es que testificamos a todos, a los que nos gustan y a los que no nos gustan; a los que est&aacute;n cerca de nosotros y a los que viven en todo el mundo.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Recu&eacute;rdeles: El &eacute;xito en el testimonio es simplemente tomar la iniciativa de compartir a Cristo en el poder del Esp&iacute;ritu Santo y dejando los resultados a Dios.</li>
	<li>Revisar el principio de respiraci&oacute;n espiritual y dar la oportunidad personal de exhalar e inhalar</li>
	<li>Dar tiempo para orar para ser controlado y dirigido por el Esp&iacute;ritu Santo</li>
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

<div class="for-enrichment">Para un mayor enriquecimiento: <!-- begin linkInternal capacitor-->
<span id= "Return1" class="internal-link" @click="this.goToPageAndSetReturn('/M2/spa/tc/tc05', '#1')">
    Lea el concepto transferible #5: C&oacute;mo usted puede ser un testigo fruct&iacute;fero 
</span>
<!-- end linkInternal capacitor-->
, comparta lo aprendido con otro miembro del grupo</div>

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

			<td class="social" @click="share('lesson', 'Ser un testigo: ', '/content/M2/spa/multiply1/multiply111.html')">
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