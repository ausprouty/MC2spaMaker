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
                        <div class="chapter_number ltr"><h1>36.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo y provisión</h1></div>
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
	<li class="back">Lea o vea <strong>Juan 6:1-14</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 6:1-14</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s alimenta a los cinco mil</h3>

<p><sup class="versenum">1 </sup>Alg&uacute;n tiempo despu&eacute;s, Jes&uacute;s se fue a la otra orilla del mar de Galilea (o de Tiber&iacute;ades).<sup class="versenum">2&nbsp;</sup>Y mucha gente lo segu&iacute;a, porque ve&iacute;an las se&ntilde;ales milagrosas que hac&iacute;a en los enfermos.<sup class="versenum">3&nbsp;</sup>Entonces subi&oacute; Jes&uacute;s a una colina y se sent&oacute; con sus disc&iacute;pulos.<sup class="versenum">4&nbsp;</sup>Faltaba muy poco tiempo para la fiesta jud&iacute;a de la Pascua.</p>

<p><sup class="versenum">5&nbsp;</sup>Cuando Jes&uacute;s alz&oacute; la vista y vio una gran multitud que ven&iacute;a hacia &eacute;l, le dijo a Felipe:</p>

<p>&mdash;&iquest;D&oacute;nde vamos a comprar pan para que coma esta gente?</p>

<p><sup class="versenum">6&nbsp;</sup>Esto lo dijo solo para ponerlo a prueba, porque &eacute;l ya sab&iacute;a lo que iba a hacer.</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;Ni con el salario de ocho meses podr&iacute;amos comprar suficiente pan para darle un pedazo a cada uno &mdash;respondi&oacute; Felipe.</p>

<p><sup class="versenum">8&nbsp;</sup>Otro de sus disc&iacute;pulos, Andr&eacute;s, que era hermano de Sim&oacute;n Pedro, le dijo:</p>

<p><sup class="versenum">9&nbsp;</sup>&mdash;Aqu&iacute; hay un muchacho que tiene cinco panes de cebada y dos pescados, pero &iquest;qu&eacute; es esto para tanta gente?</p>

<p><sup class="versenum">10&nbsp;</sup>&mdash;Hagan que se sienten todos &mdash;orden&oacute; Jes&uacute;s.</p>

<p>En ese lugar hab&iacute;a mucha hierba. As&iacute; que se sentaron, y los varones adultos eran como cinco mil.<sup class="versenum">11&nbsp;</sup>Jes&uacute;s tom&oacute; entonces los panes, dio gracias y distribuy&oacute; a los que estaban sentados todo lo que quisieron. Lo mismo hizo con los pescados.</p>

<p><sup class="versenum">12&nbsp;</sup>Una vez que quedaron satisfechos, dijo a sus disc&iacute;pulos:</p>

<p>&mdash;Recojan los pedazos que sobraron, para que no se desperdicie nada.</p>

<p><sup class="versenum">13&nbsp;</sup>As&iacute; lo hicieron y, con los pedazos de los cinco panes de cebada que les sobraron a los que hab&iacute;an comido, llenaron doce canastas.</p>

<p><sup class="versenum">14&nbsp;</sup>Al ver la se&ntilde;al que Jes&uacute;s hab&iacute;a realizado, la gente comenz&oacute; a decir: &laquo;En verdad este es el profeta, el que ha de venir al mundo&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/236.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 6:1-14&nbsp;</button>
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
<p class="up">Jes&uacute;s estaba buscando un lugar para tener un retiro con sus l&iacute;deres, pero el Padre ten&iacute;a planes diferentes. A medida que se acercaban a la orilla, Jes&uacute;s ya puede ver a las grandes multitudes reunidas porque vieron los milagros que Jes&uacute;s hab&iacute;a hecho. Jes&uacute;s se conmueve con compasi&oacute;n por ellos porque parec&iacute;an ovejas sin pastor. Jes&uacute;s comienza a ense&ntilde;ar a la enorme multitud de 5,000 hombres m&aacute;s mujeres y ni&ntilde;os. Jes&uacute;s usa la situaci&oacute;n para ense&ntilde;ar a sus l&iacute;deres acerca de la multiplicaci&oacute;n y la provisi&oacute;n de Dios desafi&aacute;ndolos a proveer comida para la multitud. Aprendieron:</p>

<ol>
	<li class="up">a levantar los ojos y ver la necesidad;</li>
	<li class="up">para permitir que sus corazones sean movidos a la compasi&oacute;n;</li>
	<li class="up">reunir los recursos que tienen a su alrededor, incluyendo pedirle a alguien (el ni&ntilde;o) que lo d&eacute; todo para que la multiplicaci&oacute;n suceda;</li>
	<li class="up">organizar y permitir que suceda lo sobrenatural; y</li>
	<li class="up">ofrecer todo lo que tienen a Dios en fe con acci&oacute;n de gracias.</li>
</ol>

<ul>
	<li class="nobreak-final-final">Para mayor estudio: <span class="popup-link" @click = "popUp('pop3')"> Lucas 9:12-17</span>; 

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>Al atardecer se le acercaron los doce y le dijeron:</p>

	<p>&mdash;Despide a la gente, para que vaya a buscar alojamiento y comida en los campos y pueblos cercanos, pues donde estamos no hay nada.</p>

	<p><sup class="versenum">13&nbsp;</sup>&mdash;Denles ustedes mismos de comer &mdash;les dijo Jes&uacute;s.</p>

	<p>&mdash;No tenemos m&aacute;s que cinco panes y dos pescados, a menos que vayamos a comprar comida para toda esta gente &mdash;objetaron ellos,<sup class="versenum">14&nbsp;</sup>porque hab&iacute;a all&iacute; unos cinco mil hombres.</p>

	<p>Pero Jes&uacute;s dijo a sus disc&iacute;pulos:</p>

	<p>&mdash;Hagan que se sienten en grupos como de cincuenta cada uno.</p>

	<p><sup class="versenum">15&nbsp;</sup>As&iacute; lo hicieron los disc&iacute;pulos, y se sentaron todos.<sup class="versenum">16&nbsp;</sup>Entonces Jes&uacute;s tom&oacute; los cinco panes y los dos pescados, y mirando al cielo, los bendijo. Luego los parti&oacute; y se los dio a los disc&iacute;pulos para que se los repartieran a la gente.<sup class="versenum">17&nbsp;</sup>Todos comieron hasta quedar satisfechos, y de los pedazos que sobraron se recogieron doce canastas.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> Mateo 14:15-21</span>; 

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">15&nbsp;</sup>Al atardecer se le acercaron sus disc&iacute;pulos y le dijeron:</p>

	<p>&mdash;Este es un lugar apartado y ya se hace tarde. Despide a la gente, para que vayan a los pueblos y se compren algo de comer.</p>

	<p><sup class="versenum">16&nbsp;</sup>&mdash;No tienen que irse &mdash;contest&oacute; Jes&uacute;s&mdash;. Denles ustedes mismos de comer.</p>

	<p><sup class="versenum">17&nbsp;</sup>Ellos objetaron:</p>

	<p>&mdash;No tenemos aqu&iacute; m&aacute;s que cinco panes y dos pescados.</p>

	<p><sup class="versenum">18&nbsp;</sup>&mdash;Tr&aacute;iganmelos ac&aacute; &mdash;les dijo Jes&uacute;s.</p>

	<p><sup class="versenum">19&nbsp;</sup>Y mand&oacute; a la gente que se sentara sobre la hierba. Tom&oacute; los cinco panes y los dos pescados y, mirando al cielo, los bendijo. Luego parti&oacute; los panes y se los dio a los disc&iacute;pulos, quienes los repartieron a la gente.<sup class="versenum">20&nbsp;</sup>Todos comieron hasta quedar satisfechos, y los disc&iacute;pulos recogieron doce canastas llenas de pedazos que sobraron.<sup class="versenum">21&nbsp;</sup>Los que comieron fueron unos cinco mil hombres, sin contar a las mujeres y a los ni&ntilde;os.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> Marcos 6:35-44</span>

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">35&nbsp;</sup>Cuando ya se hizo tarde, se le acercaron sus disc&iacute;pulos y le dijeron:</p>

	<p>&mdash;Este es un lugar apartado y ya es muy tarde.<sup class="versenum">36&nbsp;</sup>Despide a la gente, para que vayan a los campos y pueblos cercanos y se compren algo de comer.</p>

	<p><sup class="versenum">37&nbsp;</sup>&mdash;Denles ustedes mismos de comer &mdash;contest&oacute; Jes&uacute;s.</p>

	<p>&mdash;&iexcl;Eso costar&iacute;a casi un a&ntilde;o de trabajo! &mdash;objetaron&mdash;. &iquest;Quieres que vayamos y gastemos todo ese dinero en pan para darles de comer?</p>

	<p><sup class="versenum">38&nbsp;</sup>&mdash;&iquest;Cu&aacute;ntos panes tienen ustedes? &mdash;pregunt&oacute;&mdash;. Vayan a ver.</p>

	<p>Despu&eacute;s de averiguarlo, le dijeron:</p>

	<p>&mdash;Cinco, y dos pescados.</p>

	<p><sup class="versenum">39&nbsp;</sup>Entonces les mand&oacute; que hicieran que la gente se sentara por grupos sobre la hierba verde.<sup class="versenum">40&nbsp;</sup>As&iacute; que ellos se acomodaron en grupos de cien y de cincuenta.<sup class="versenum">41&nbsp;</sup>Jes&uacute;s tom&oacute; los cinco panes y los dos pescados y, mirando al cielo, los bendijo. Luego parti&oacute; los panes y se los dio a los disc&iacute;pulos para que se los repartieran a la gente. Tambi&eacute;n reparti&oacute; los dos pescados entre todos.<sup class="versenum">42&nbsp;</sup>Comieron todos hasta quedar satisfechos,<sup class="versenum">43&nbsp;</sup>y los disc&iacute;pulos recogieron doce canastas llenas de pedazos de pan y de pescado.<sup class="versenum">44&nbsp;</sup>Los que comieron fueron cinco mil.</p>
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

			<td class="social" @click="share('lesson', 'Liderazgo y provisión: ', '/content/M2/spa/multiply2/multiply236.html')">
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