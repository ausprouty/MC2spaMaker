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
                        <div class="chapter_number ltr"><h1>45.</h1></div>
                        <div class="chapter_title ltr"><h1>El liderazgo es mayordomía</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 19:1-27</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 19:1-27</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Zaqueo, el recaudador de impuestos</h3>

<p><sup class="versenum">1 </sup>Jes&uacute;s lleg&oacute; a Jeric&oacute; y comenz&oacute; a cruzar la ciudad.<sup class="versenum">2&nbsp;</sup>Resulta que hab&iacute;a all&iacute; un hombre llamado Zaqueo, jefe de los recaudadores de impuestos, que era muy rico.<sup class="versenum">3&nbsp;</sup>Estaba tratando de ver qui&eacute;n era Jes&uacute;s, pero la multitud se lo imped&iacute;a, pues era de baja estatura.<sup class="versenum">4&nbsp;</sup>Por eso se adelant&oacute; corriendo y se subi&oacute; a un &aacute;rbol sic&oacute;moro para poder verlo, ya que Jes&uacute;s iba a pasar por all&iacute;.</p>

<p><sup class="versenum">5&nbsp;</sup>Llegando al lugar, Jes&uacute;s mir&oacute; hacia arriba y le dijo:</p>

<p>&mdash;Zaqueo, baja en seguida. Tengo que quedarme hoy en tu casa.</p>

<p><sup class="versenum">6&nbsp;</sup>As&iacute; que se apresur&oacute; a bajar y, muy contento, recibi&oacute; a Jes&uacute;s en su casa.</p>

<p><sup class="versenum">7&nbsp;</sup>Al ver esto, todos empezaron a murmurar: &laquo;Ha ido a hospedarse con un pecador&raquo;.</p>

<p><sup class="versenum">8&nbsp;</sup>Pero Zaqueo dijo resueltamente:</p>

<p>&mdash;Mira, Se&ntilde;or: Ahora mismo voy a dar a los pobres la mitad de mis bienes y, si en algo he defraudado a alguien, le devolver&eacute; cuatro veces la cantidad que sea.</p>

<p><sup class="versenum">9&nbsp;</sup>&mdash;Hoy ha llegado la salvaci&oacute;n a esta casa &mdash;le dijo Jes&uacute;s&mdash;, ya que este tambi&eacute;n es hijo de Abraham.<sup class="versenum">10&nbsp;</sup>Porque el Hijo del hombre vino a buscar y a salvar lo que se hab&iacute;a perdido.</p>

<h3>Par&aacute;bola del dinero</h3>

<p><sup class="versenum">11&nbsp;</sup>Como la gente lo escuchaba, pas&oacute; a contarles una par&aacute;bola, porque estaba cerca de Jerusal&eacute;n y la gente pensaba que el reino de Dios iba a manifestarse en cualquier momento.<sup class="versenum">12&nbsp;</sup>As&iacute; que les dijo: &laquo;Un hombre de la nobleza se fue a un pa&iacute;s lejano para ser coronado rey y luego regresar.<sup class="versenum">13&nbsp;</sup>Llam&oacute; a diez de sus siervos y entreg&oacute; a cada cual una buena cantidad de dinero. Les instruy&oacute;: &ldquo;Hagan negocio con este dinero hasta que yo vuelva&rdquo;.<sup class="versenum">14&nbsp;</sup>Pero sus s&uacute;bditos lo odiaban y mandaron tras &eacute;l una delegaci&oacute;n a decir: &ldquo;No queremos a este por rey&rdquo;.</p>

<p><sup class="versenum">15&nbsp;</sup>&raquo;A pesar de todo, fue nombrado rey. Cuando regres&oacute; a su pa&iacute;s, mand&oacute; llamar a los siervos a quienes hab&iacute;a entregado el dinero, para enterarse de lo que hab&iacute;an ganado.<sup class="versenum">16&nbsp;</sup>Se present&oacute; el primero y dijo: &ldquo;Se&ntilde;or, su dinero ha producido diez veces m&aacute;s&rdquo;.<sup class="versenum">17&nbsp;</sup>&ldquo;&iexcl;Hiciste bien, siervo bueno! &mdash;le respondi&oacute; el rey&mdash;. Puesto que has sido fiel en tan poca cosa, te doy el gobierno de diez ciudades&rdquo;.<sup class="versenum">18&nbsp;</sup>Se present&oacute; el segundo y dijo: &ldquo;Se&ntilde;or, su dinero ha producido cinco veces m&aacute;s&rdquo;.<sup class="versenum">19&nbsp;</sup>El rey le respondi&oacute;: &ldquo;A ti te pongo sobre cinco ciudades&rdquo;.</p>

<p><sup class="versenum">20&nbsp;</sup>&raquo;Lleg&oacute; otro siervo y dijo: &ldquo;Se&ntilde;or, aqu&iacute; tiene su dinero; lo he tenido guardado, envuelto en un pa&ntilde;uelo.<sup class="versenum">21&nbsp;</sup>Es que le ten&iacute;a miedo a usted, que es un hombre muy exigente: toma lo que no deposit&oacute; y cosecha lo que no sembr&oacute;&rdquo;.<sup class="versenum">22&nbsp;</sup>El rey le contest&oacute;: &ldquo;Siervo malo, con tus propias palabras te voy a juzgar. &iquest;As&iacute; que sab&iacute;as que soy muy exigente, que tomo lo que no deposit&eacute; y cosecho lo que no sembr&eacute;?<sup class="versenum">23&nbsp;</sup>Entonces, &iquest;por qu&eacute; no pusiste mi dinero en el banco, para que al regresar pudiera reclamar los intereses?&rdquo;<sup class="versenum">24&nbsp;</sup>Luego dijo a los presentes: &ldquo;Qu&iacute;tenle el dinero y d&eacute;nselo al que recibi&oacute; diez veces m&aacute;s&rdquo;.<sup class="versenum">25&nbsp;</sup>&ldquo;Se&ntilde;or &mdash;protestaron&mdash;, &iexcl;&eacute;l ya tiene diez veces m&aacute;s!&rdquo;<sup class="versenum">26&nbsp;</sup>El rey contest&oacute;: &ldquo;Les aseguro que a todo el que tiene, se le dar&aacute; m&aacute;s, pero al que no tiene, se le quitar&aacute; hasta lo que tiene.<sup class="versenum">27&nbsp;</sup>Pero, en cuanto a esos enemigos m&iacute;os que no me quer&iacute;an por rey, tr&aacute;iganlos ac&aacute; y m&aacute;tenlos delante de m&iacute;&rdquo;&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/245.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 19:1-27&nbsp;</button>
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

<p class="up">Jes&uacute;s vivi&oacute; lo que ense&ntilde;&oacute;. En Jeric&oacute;, Jes&uacute;s conoce a Zaqueo, otro hombre muy rico, pero extremadamente impopular, que es el principal recaudador de impuestos en la regi&oacute;n. Jes&uacute;s revela que el Padre quiere que &eacute;l vaya a la casa de Zaqueo. La gente est&aacute; conmocionada, pero Zaqueo est&aacute; emocionado. El tiempo que pasa con Jes&uacute;s cambia su coraz&oacute;n. &Eacute;l recibe el perd&oacute;n de Jes&uacute;s y comienza a cambiar sus caminos. &Eacute;l hace las cosas bien con aquellos a los que ha agraviado. Mientras est&aacute;n celebrando el cambio de vida de Zaqueo, Jes&uacute;s ense&ntilde;a una par&aacute;bola acerca de ser un administrador de lo que Dios nos ha dado. Un d&iacute;a tendremos que dar cuenta de c&oacute;mo hemos usado los dones de Dios. Somos administradores de los recursos materiales y tambi&eacute;n de los entendimientos espirituales profundos. Como verdaderos disc&iacute;pulos de Jes&uacute;s, nos damos cuenta de que no poseemos nada. Dios es el due&ntilde;o y estamos llamados a administrar lo que &Eacute;l nos conf&iacute;a. Esto incluye nuestro tiempo, nuestras palabras, nuestros pensamientos y nuestras acciones.</p>

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

			<td class="social" @click="share('lesson', 'El liderazgo es mayordomía: ', '/content/M2/spa/multiply2/multiply245.html')">
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