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
                        <div class="chapter_number ltr"><h1>31.</h1></div>
                        <div class="chapter_title ltr"><h1>Perdón y liderazgo</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 7:36 -&nbsp;8:3</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 7:36-8:3</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Una mujer pecadora unge a Jes&uacute;s</h3>

<p><sup class="versenum">36&nbsp;</sup>Uno de los fariseos invit&oacute; a Jes&uacute;s a comer, as&iacute; que fue a la casa del fariseo y se sent&oacute; a la mesa.<sup class="versenum">37&nbsp;</sup>Ahora bien, viv&iacute;a en aquel pueblo una mujer que ten&iacute;a fama de pecadora. Cuando ella se enter&oacute; de que Jes&uacute;s estaba comiendo en casa del fariseo, se present&oacute; con un frasco de alabastro lleno de perfume.<sup class="versenum">38&nbsp;</sup>Llorando, se arroj&oacute; a los pies de Jes&uacute;s, de manera que se los ba&ntilde;aba en l&aacute;grimas. Luego se los sec&oacute; con los cabellos; tambi&eacute;n se los besaba y se los ung&iacute;a con el perfume.</p>

<p><sup class="versenum">39&nbsp;</sup>Al ver esto, el fariseo que lo hab&iacute;a invitado dijo para s&iacute;: &laquo;Si este hombre fuera profeta, sabr&iacute;a qui&eacute;n es la que lo est&aacute; tocando, y qu&eacute; clase de mujer es: una pecadora&raquo;.</p>

<p><sup class="versenum">40&nbsp;</sup>Entonces Jes&uacute;s le dijo a manera de respuesta:</p>

<p>&mdash;Sim&oacute;n, tengo algo que decirte.</p>

<p>&mdash;Dime, Maestro &mdash;respondi&oacute;.</p>

<p><sup class="versenum">41&nbsp;</sup>&mdash;Dos hombres le deb&iacute;an dinero a cierto prestamista. Uno le deb&iacute;a quinientas monedas de plata, y el otro cincuenta.<sup class="versenum">42&nbsp;</sup>Como no ten&iacute;an con qu&eacute; pagarle, les perdon&oacute; la deuda a los dos. Ahora bien, &iquest;cu&aacute;l de los dos lo amar&aacute; m&aacute;s?</p>

<p><sup class="versenum">43&nbsp;</sup>&mdash;Supongo que aquel a quien m&aacute;s le perdon&oacute; &mdash;contest&oacute; Sim&oacute;n.</p>

<p>&mdash;Has juzgado bien &mdash;le dijo Jes&uacute;s.</p>

<p><sup class="versenum">44&nbsp;</sup>Luego se volvi&oacute; hacia la mujer y le dijo a Sim&oacute;n:</p>

<p>&mdash;&iquest;Ves a esta mujer? Cuando entr&eacute; en tu casa, no me diste agua para los pies, pero ella me ha ba&ntilde;ado los pies en l&aacute;grimas y me los ha secado con sus cabellos.<sup class="versenum">45&nbsp;</sup>T&uacute; no me besaste, pero ella, desde que entr&eacute;, no ha dejado de besarme los pies.<sup class="versenum">46&nbsp;</sup>T&uacute; no me ungiste la cabeza con aceite, pero ella me ungi&oacute; los pies con perfume.<sup class="versenum">47&nbsp;</sup>Por esto te digo: si ella ha amado mucho, es que sus muchos pecados le han sido perdonados. Pero a quien poco se le perdona, poco ama.</p>

<p><sup class="versenum">48&nbsp;</sup>Entonces le dijo Jes&uacute;s a ella:</p>

<p>&mdash;Tus pecados quedan perdonados.</p>

<p><sup class="versenum">49&nbsp;</sup>Los otros invitados comenzaron a decir entre s&iacute;: &laquo;&iquest;Qui&eacute;n es este, que hasta perdona pecados?&raquo;</p>

<p><sup class="versenum">50&nbsp;</sup>&mdash;Tu fe te ha salvado &mdash;le dijo Jes&uacute;s a la mujer&mdash;; vete en paz.</p>

<h3>Par&aacute;bola del sembrador</h3>

<p><sup class="versenum">1 </sup>Despu&eacute;s de esto, Jes&uacute;s estuvo recorriendo los pueblos y las aldeas, proclamando las buenas nuevas del reino de Dios. Lo acompa&ntilde;aban los doce,<sup class="versenum">2&nbsp;</sup>y tambi&eacute;n algunas mujeres que hab&iacute;an sido sanadas de esp&iacute;ritus malignos y de enfermedades: Mar&iacute;a, a la que llamaban Magdalena, y de la que hab&iacute;an salido siete demonios;<sup class="versenum">3&nbsp;</sup>Juana, esposa de Cuza, el administrador de Herodes; Susana y muchas m&aacute;s que los ayudaban con sus propios recursos.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/231.mp4" type="button" class="external-movie">
         Mira Lucas 7:36-8:3</button>
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

<p class="up">Jes&uacute;s conoce a Sim&oacute;n, un curioso fariseo que vive en Cafarna&uacute;m, que hab&iacute;a estado siguiendo Su ministerio. Sim&oacute;n invita a Jes&uacute;s a su casa junto con muchos otros fariseos. Jes&uacute;s acepta la invitaci&oacute;n para la cita divina dispuesta por el Padre para llegar a estos hombres religiosos y santurrones. Cuando comienza la noche, a Jes&uacute;s no se le ofrece la hospitalidad del lavado, que normalmente se da a los invitados a la cena. As&iacute; que el Padre envi&oacute; a una mujer pecadora a hacer estas cosas por Jes&uacute;s. Jes&uacute;s aprovech&oacute; la oportunidad para ense&ntilde;ar a los hombres sobre el coraz&oacute;n de aquellos que reciben el perd&oacute;n: son honestos con su necesidad y son humildes. Sim&oacute;n hab&iacute;a aprendido a encubrir sus pecados. Debemos tener cuidado de vivir con integridad, aceptando el perd&oacute;n de Dios por nuestros pecados y no escondi&eacute;ndolos como Sim&oacute;n.</p>

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

			<td class="social" @click="share('lesson', 'Perdón y liderazgo: ', '/content/M2/spa/multiply2/multiply231.html')">
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