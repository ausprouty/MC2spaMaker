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
                        <div class="chapter_number ltr"><h1>29.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo y Autoridad</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 7:1-10</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 7:1-10</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>La fe del centuri&oacute;n</h3>

<p><sup class="versenum">1 </sup>Cuando termin&oacute; de hablar al pueblo, Jes&uacute;s entr&oacute; en Caperna&uacute;m.<sup class="versenum">2&nbsp;</sup>Hab&iacute;a all&iacute; un centuri&oacute;n, cuyo siervo, a quien &eacute;l estimaba mucho, estaba enfermo, a punto de morir.<sup class="versenum">3&nbsp;</sup>Como oy&oacute; hablar de Jes&uacute;s, el centuri&oacute;n mand&oacute; a unos dirigentes de los jud&iacute;os a pedirle que fuera a sanar a su siervo.<sup class="versenum">4&nbsp;</sup>Cuando llegaron ante Jes&uacute;s, le rogaron con insistencia:</p>

<p>&mdash;Este hombre merece que le concedas lo que te pide:<sup class="versenum">5&nbsp;</sup>aprecia tanto a nuestra naci&oacute;n que nos ha construido una sinagoga.</p>

<p><sup class="versenum">6&nbsp;</sup>As&iacute; que Jes&uacute;s fue con ellos. No estaba lejos de la casa cuando el centuri&oacute;n mand&oacute; unos amigos a decirle:</p>

<p>&mdash;Se&ntilde;or, no te tomes tanta molestia, pues no merezco que entres bajo mi techo.<sup class="versenum">7&nbsp;</sup>Por eso ni siquiera me atrev&iacute; a presentarme ante ti. Pero, con una sola palabra que digas, quedar&aacute; sano mi siervo.<sup class="versenum">8&nbsp;</sup>Yo mismo obedezco &oacute;rdenes superiores y, adem&aacute;s, tengo soldados bajo mi autoridad. Le digo a uno: &ldquo;Ve&rdquo;, y va, y al otro: &ldquo;Ven&rdquo;, y viene. Le digo a mi siervo: &ldquo;Haz esto&rdquo;, y lo hace.</p>

<p><sup class="versenum">9&nbsp;</sup>Al o&iacute;rlo, Jes&uacute;s se asombr&oacute; de &eacute;l y, volvi&eacute;ndose a la multitud que lo segu&iacute;a, coment&oacute;:</p>

<p>&mdash;Les digo que ni siquiera en Israel he encontrado una fe tan grande.</p>

<p><sup class="versenum">10&nbsp;</sup>Al regresar a casa, los enviados encontraron sano al siervo.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/229.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 7:1-10&nbsp;</button>
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
<p class="up">Jes&uacute;s termin&oacute; de ense&ntilde;ar a sus disc&iacute;pulos. Viajando de regreso a Cafarna&uacute;m se encuentra con un centuri&oacute;n romano, un oficial militar a cargo de 100 hombres. Este l&iacute;der militar romano mostr&oacute; un amor y compasi&oacute;n inusuales por su esclavo enfermo al pedir la ayuda de Jes&uacute;s. El trabajo del Centuri&oacute;n era mantener el orden, hacer cumplir las leyes y asegurarse de que los impuestos se recaudaban. Pero Dios us&oacute; el Centuri&oacute;n para instruir a los l&iacute;deres del movimiento. Aprendieron:</p>

<ol>
	<li class="up">Un l&iacute;der ama a aquellos a quienes est&aacute; liderando;</li>
	<li class="up">Un l&iacute;der lidera con humildad, d&aacute;ndose cuenta de que no es digno de honor;</li>
	<li class="up">Un l&iacute;der gu&iacute;a por la fe, no confiando en lo que puede ver, sino en el Dios invisible; y</li>
	<li class="up">Un l&iacute;der nunca olvida que est&aacute; bajo autoridad y que dar&aacute; cuenta de las personas puestas bajo su cuidado. Jes&uacute;s se sorprendi&oacute; al conocer a un hombre como este.</li>
</ol>

<p class="up">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop3')"> Mateo 8:5-13</span>.</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">5&nbsp;</sup>Al entrar Jes&uacute;s en Caperna&uacute;m, se le acerc&oacute; un centuri&oacute;n pidiendo ayuda.</p>

<p><sup class="versenum">6&nbsp;</sup>&mdash;Se&ntilde;or, mi siervo est&aacute; postrado en casa con par&aacute;lisis, y sufre terriblemente.</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;Ir&eacute; a sanarlo &mdash;respondi&oacute; Jes&uacute;s.</p>

<p><sup class="versenum">8&nbsp;</sup>&mdash;Se&ntilde;or, no merezco que entres bajo mi techo. Pero basta con que digas una sola palabra, y mi siervo quedar&aacute; sano.<sup class="versenum">9&nbsp;</sup>Porque yo mismo soy un hombre sujeto a &oacute;rdenes superiores, y adem&aacute;s tengo soldados bajo mi autoridad. Le digo a uno: &ldquo;Ve&rdquo;, y va, y al otro: &ldquo;Ven&rdquo;, y viene. Le digo a mi siervo: &ldquo;Haz esto&rdquo;, y lo hace.</p>

<p><sup class="versenum">10&nbsp;</sup>Al o&iacute;r esto, Jes&uacute;s se asombr&oacute; y dijo a quienes lo segu&iacute;an:</p>

<p>&mdash;Les aseguro que no he encontrado en Israel a nadie que tenga tanta fe.<sup class="versenum">11&nbsp;</sup>Les digo que muchos vendr&aacute;n del oriente y del occidente, y participar&aacute;n en el banquete con Abraham, Isaac y Jacob en el reino de los cielos.<sup class="versenum">12&nbsp;</sup>Pero a los s&uacute;bditos del reino se les echar&aacute; afuera, a la oscuridad, donde habr&aacute; llanto y rechinar de dientes.</p>

<p><sup class="versenum">13&nbsp;</sup>Luego Jes&uacute;s le dijo al centuri&oacute;n:</p>

<p>&mdash;&iexcl;Ve! Todo se har&aacute; tal como cre&iacute;ste.</p>

<p>Y en esa misma hora aquel siervo qued&oacute; sano.</p>
<!-- end bible --></div>

<p>&nbsp;</p>

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

			<td class="social" @click="share('lesson', 'Liderazgo y Autoridad: ', '/content/M2/spa/multiply2/multiply229.html')">
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