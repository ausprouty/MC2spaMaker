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
                        <div class="chapter_number ltr"><h1>39.</h1></div>
                        <div class="chapter_title ltr"><h1>Los creyentes se apartan de las viejas prácticas</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 19:11-22</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 19:11-22</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">11&nbsp;</sup>Dios hac&iacute;a milagros extraordinarios por medio de Pablo,<sup class="versenum">12&nbsp;</sup>a tal grado que a los enfermos les llevaban pa&ntilde;uelos y delantales que hab&iacute;an tocado el cuerpo de Pablo, y quedaban sanos de sus enfermedades, y los esp&iacute;ritus malignos sal&iacute;an de ellos.</p>

<p><sup class="versenum">13&nbsp;</sup>Algunos jud&iacute;os que andaban expulsando esp&iacute;ritus malignos intentaron invocar sobre los endemoniados el nombre del Se&ntilde;or Jes&uacute;s. Dec&iacute;an: &laquo;&iexcl;En el nombre de Jes&uacute;s, a quien Pablo predica, les ordeno que salgan!&raquo;<sup class="versenum">14&nbsp;</sup>Esto lo hac&iacute;an siete hijos de un tal Esceva, que era uno de los jefes de los sacerdotes jud&iacute;os.</p>

<p><sup class="versenum">15&nbsp;</sup>Un d&iacute;a el esp&iacute;ritu maligno les replic&oacute;: &laquo;Conozco a Jes&uacute;s, y s&eacute; qui&eacute;n es Pablo, pero ustedes &iquest;qui&eacute;nes son?&raquo;<sup class="versenum">16&nbsp;</sup>Y abalanz&aacute;ndose sobre ellos, el hombre que ten&iacute;a el esp&iacute;ritu maligno los domin&oacute; a todos. Los maltrat&oacute; con tanta violencia que huyeron de la casa desnudos y heridos.</p>

<p><sup class="versenum">17&nbsp;</sup>Cuando se enteraron los jud&iacute;os y los griegos que viv&iacute;an en &Eacute;feso, el temor se apoder&oacute; de todos ellos, y el nombre del Se&ntilde;or Jes&uacute;s era glorificado.<sup class="versenum">18&nbsp;</sup>Muchos de los que hab&iacute;an cre&iacute;do llegaban ahora y confesaban p&uacute;blicamente sus pr&aacute;cticas malvadas.<sup class="versenum">19&nbsp;</sup>Un buen n&uacute;mero de los que practicaban la hechicer&iacute;a juntaron sus libros en un mont&oacute;n y los quemaron delante de todos. Cuando calcularon el precio de aquellos libros, result&oacute; un total de cincuenta mil monedas de plata.<sup class="versenum">20&nbsp;</sup>As&iacute; la palabra del Se&ntilde;or crec&iacute;a y se difund&iacute;a con poder arrollador.</p>

<p><sup class="versenum">21&nbsp;</sup>Despu&eacute;s de todos estos sucesos, Pablo tom&oacute; la determinaci&oacute;n de ir a Jerusal&eacute;n, pasando por Macedonia y Acaya. Dec&iacute;a: &laquo;Despu&eacute;s de estar all&iacute;, tengo que visitar Roma&raquo;.<sup class="versenum">22&nbsp;</sup>Entonces envi&oacute; a Macedonia a dos de sus ayudantes, Timoteo y Erasto, mientras &eacute;l se quedaba por alg&uacute;n tiempo en la provincia de Asia.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/339.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 19:11-22&nbsp;</button>
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
<p class="up">La ciudad de &Eacute;feso estaba llena de gente practicando magia oculta. El Se&ntilde;or estaba haciendo milagros inusuales a trav&eacute;s de Pablo para proporcionar sanaci&oacute;n a los enfermos y a los pose&iacute;dos. Los exorcistas jud&iacute;os trataron de ser como Pablo, pero no tuvieron &eacute;xito en usar el nombre de Jes&uacute;s en sus hechizos. Eran impotentes porque no ten&iacute;an el don del Esp&iacute;ritu Santo a trav&eacute;s de una relaci&oacute;n personal con Jes&uacute;s. Aprendemos de esta historia que los malos esp&iacute;ritus saben acerca de Jes&uacute;s y Sus siervos. Este evento caus&oacute; arrepentimiento y avivamiento entre los j&oacute;venes creyentes efesios que a&uacute;n no hab&iacute;an renunciado por completo a las cosas imp&iacute;as de su vida pasada. Debido al desarrollo de Pablo de otros l&iacute;deres, fue capaz de encargar a Timoteo y Erasmo que discipulen a&uacute;n m&aacute;s a los creyentes en Macedonia. Pablo continu&oacute; haciendo entrenamiento a larga distancia y tutor&iacute;a de la iglesia en Corinto a trav&eacute;s de la escritura de cartas. Esta historia incluye la quinta declaraci&oacute;n sumaria que se encuentra en Hechos: la palabra del Se&ntilde;or continu&oacute; difundi&eacute;ndose ampliamente y teniendo un efecto poderoso. La primera carta a la iglesia en Corinto se puede leer aqu&iacute; (1 Corintios).</p>

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

			<td class="social" @click="share('lesson', 'Los creyentes se apartan de las viejas prácticas: ', '/content/M2/spa/multiply3/multiply339.html')">
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