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
                        <div class="chapter_number ltr"><h1>52.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo obediente</h1></div>
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
	<li class="back">Lea o vea <strong>Mateo 28:16-20</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Mateo 28:16-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>La gran comisi&oacute;n</h3>

<p><sup class="versenum">16&nbsp;</sup>Los once disc&iacute;pulos fueron a Galilea, a la monta&ntilde;a que Jes&uacute;s les hab&iacute;a indicado.<sup class="versenum">17&nbsp;</sup>Cuando lo vieron, lo adoraron; pero algunos dudaban.<sup class="versenum">18&nbsp;</sup>Jes&uacute;s se acerc&oacute; entonces a ellos y les dijo:</p>

<p>&mdash;Se me ha dado toda autoridad en el cielo y en la tierra.<sup class="versenum">19&nbsp;</sup>Por tanto, vayan y hagan disc&iacute;pulos de todas las naciones, bautiz&aacute;ndolos en el nombre del Padre y del Hijo y del Esp&iacute;ritu Santo,<sup class="versenum">20&nbsp;</sup>ense&ntilde;&aacute;ndoles a obedecer todo lo que les he mandado a ustedes. Y les aseguro que estar&eacute; con ustedes siempre, hasta el fin del mundo.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/252.mp4" type="button" class="external-movie">
         Mira &nbsp;Mateo 28:16-20&nbsp;</button>
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
<!-- end default revealSummary --><ul>
<li class="nobreak-final-final">Pedro lleva al grupo a la monta&ntilde;a donde Jes&uacute;s se encuentra con ellos. Lo adoran como el salvador resucitado del mundo. Es aqu&iacute; donde Jes&uacute;s resume la obra de su vida y les da un simple mandamiento: &iexcl;haz disc&iacute;pulos! Toda su formaci&oacute;n los ha preparado para ello. Jes&uacute;s dice &quot;Vete&quot;, lo que literalmente significa, &quot;a medida que avanzas por la vida, haz disc&iacute;pulos&quot;. En las actividades cotidianas de la vida, debemos invertir en los dem&aacute;s. Dice que esto es para todos, para cada cultura, cada tribu, para cada lengua. El movimiento de hacer disc&iacute;pulos debe cubrir todo el mundo. Jes&uacute;s promete que &Eacute;l siempre estar&aacute; con nosotros al obedecer este mandamiento. Este es el estilo de vida que Jes&uacute;s nos est&aacute; pidiendo que tengamos. Significativamente, este evento tiene lugar &quot;en una monta&ntilde;a en Galilea&quot; con vistas al paisaje donde fueron llamados y entrenados para su misi&oacute;n, y desde donde pudieron ver las naciones circundantes. La &uacute;ltima aparici&oacute;n de Jes&uacute;s ser&iacute;a unos d&iacute;as m&aacute;s tarde cuando ascienda desde el Monte de los Olivos, a las afueras de Jerusal&eacute;n (<span class="popup-link" @click = "popUp('pop3')"> Hechos 1:1- 11</span>).

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Estimado Te&oacute;filo, en mi primer libro me refer&iacute; a todo lo que Jes&uacute;s comenz&oacute; a hacer y ense&ntilde;ar<sup class="versenum">2&nbsp;</sup>hasta el d&iacute;a en que fue llevado al cielo, luego de darles instrucciones por medio del Esp&iacute;ritu Santo a los ap&oacute;stoles que hab&iacute;a escogido.<sup class="versenum">3&nbsp;</sup>Despu&eacute;s de padecer la muerte, se les present&oacute; d&aacute;ndoles muchas pruebas convincentes de que estaba vivo. Durante cuarenta d&iacute;as se les apareci&oacute; y les habl&oacute; acerca del reino de Dios.<sup class="versenum">4&nbsp;</sup>Una vez, mientras com&iacute;a con ellos, les orden&oacute;:</p>

<p>&mdash;No se alejen de Jerusal&eacute;n, sino esperen la promesa del Padre, de la cual les he hablado:<sup class="versenum">5&nbsp;</sup>Juan bautiz&oacute; con agua, pero dentro de pocos d&iacute;as ustedes ser&aacute;n bautizados con el Esp&iacute;ritu Santo.</p>

<p><sup class="versenum">6&nbsp;</sup>Entonces los que estaban reunidos con &eacute;l le preguntaron:</p>

<p>&mdash;Se&ntilde;or, &iquest;es ahora cuando vas a restablecer el reino a Israel?</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;No les toca a ustedes conocer la hora ni el momento determinados por la autoridad misma del Padre &mdash;les contest&oacute; Jes&uacute;s&mdash;.<sup class="versenum">8&nbsp;</sup>Pero, cuando venga el Esp&iacute;ritu Santo sobre ustedes, recibir&aacute;n poder y ser&aacute;n mis testigos tanto en Jerusal&eacute;n como en toda Judea y Samaria, y hasta los confines de la tierra.</p>

<p><sup class="versenum">9&nbsp;</sup>Habiendo dicho esto, mientras ellos lo miraban, fue llevado a las alturas hasta que una nube lo ocult&oacute; de su vista.<sup class="versenum">10&nbsp;</sup>Ellos se quedaron mirando fijamente al cielo mientras &eacute;l se alejaba. De repente, se les acercaron dos hombres vestidos de blanco, que les dijeron:</p>

<p><sup class="versenum">11&nbsp;</sup>&mdash;Galileos, &iquest;qu&eacute; hacen aqu&iacute; mirando al cielo? Este mismo Jes&uacute;s, que ha sido llevado de entre ustedes al cielo, vendr&aacute; otra vez de la misma manera que lo han visto irse.</p>
<!-- end bible --></div>
&nbsp;A medida que asciende, les recuerda que esperen en Jerusal&eacute;n para ser llenos del Esp&iacute;ritu Santo, quien los empoderar&iacute;a para llevar a cabo Su obra.

</li></ul>
<ul>
<li class="nobreak-final-final">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop4')"> Marcos 16:19-20</span>;&nbsp;

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">19&nbsp;</sup>Despu&eacute;s de hablar con ellos, el Se&ntilde;or Jes&uacute;s fue llevado al cielo y se sent&oacute; a la derecha de Dios.<sup class="versenum">20&nbsp;</sup>Los disc&iacute;pulos salieron y predicaron por todas partes, y el Se&ntilde;or los ayudaba en la obra y confirmaba su palabra con las se&ntilde;ales que la acompa&ntilde;aban.</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop5')"> Lucas 24:50-53</span>;&nbsp;

<div class="popup invisible" id="pop5"><!-- begin bible -->
<p><sup class="versenum">50&nbsp;</sup>Despu&eacute;s los llev&oacute; Jes&uacute;s hasta Betania; all&iacute; alz&oacute; las manos y los bendijo.<sup class="versenum">51&nbsp;</sup>Sucedi&oacute; que, mientras los bendec&iacute;a, se alej&oacute; de ellos y fue llevado al cielo.<sup class="versenum">52&nbsp;</sup>Ellos, entonces, lo adoraron y luego regresaron a Jerusal&eacute;n con gran alegr&iacute;a.<sup class="versenum">53&nbsp;</sup>Y estaban continuamente en el templo, alabando a Dios.</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop6')"> Hechos 1:1-11</span>.

<div class="popup invisible" id="pop6"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Estimado Te&oacute;filo, en mi primer libro me refer&iacute; a todo lo que Jes&uacute;s comenz&oacute; a hacer y ense&ntilde;ar<sup class="versenum">2&nbsp;</sup>hasta el d&iacute;a en que fue llevado al cielo, luego de darles instrucciones por medio del Esp&iacute;ritu Santo a los ap&oacute;stoles que hab&iacute;a escogido.<sup class="versenum">3&nbsp;</sup>Despu&eacute;s de padecer la muerte, se les present&oacute; d&aacute;ndoles muchas pruebas convincentes de que estaba vivo. Durante cuarenta d&iacute;as se les apareci&oacute; y les habl&oacute; acerca del reino de Dios.<sup class="versenum">4&nbsp;</sup>Una vez, mientras com&iacute;a con ellos, les orden&oacute;:</p>

<p>&mdash;No se alejen de Jerusal&eacute;n, sino esperen la promesa del Padre, de la cual les he hablado:<sup class="versenum">5&nbsp;</sup>Juan bautiz&oacute; con agua, pero dentro de pocos d&iacute;as ustedes ser&aacute;n bautizados con el Esp&iacute;ritu Santo.</p>

<p><sup class="versenum">6&nbsp;</sup>Entonces los que estaban reunidos con &eacute;l le preguntaron:</p>

<p>&mdash;Se&ntilde;or, &iquest;es ahora cuando vas a restablecer el reino a Israel?</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;No les toca a ustedes conocer la hora ni el momento determinados por la autoridad misma del Padre &mdash;les contest&oacute; Jes&uacute;s&mdash;.<sup class="versenum">8&nbsp;</sup>Pero, cuando venga el Esp&iacute;ritu Santo sobre ustedes, recibir&aacute;n poder y ser&aacute;n mis testigos tanto en Jerusal&eacute;n como en toda Judea y Samaria, y hasta los confines de la tierra.</p>

<p><sup class="versenum">9&nbsp;</sup>Habiendo dicho esto, mientras ellos lo miraban, fue llevado a las alturas hasta que una nube lo ocult&oacute; de su vista.<sup class="versenum">10&nbsp;</sup>Ellos se quedaron mirando fijamente al cielo mientras &eacute;l se alejaba. De repente, se les acercaron dos hombres vestidos de blanco, que les dijeron:</p>

<p><sup class="versenum">11&nbsp;</sup>&mdash;Galileos, &iquest;qu&eacute; hacen aqu&iacute; mirando al cielo? Este mismo Jes&uacute;s, que ha sido llevado de entre ustedes al cielo, vendr&aacute; otra vez de la misma manera que lo han visto irse.</p>
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
	<li class="up">Evangelio</li>
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

			<td class="social" @click="share('lesson', 'Liderazgo obediente: ', '/content/M2/spa/multiply2/multiply252.html')">
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