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
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>Matías elegido para reemplazar a Judas</h1></div>
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
	<li class="back">(opcional) Use una Declaraci&oacute;n de Fe acerca de Jes&uacute;s, como <span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp;</sup>...&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos.&nbsp;</p>
	</div>
	</li>
</ul>

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
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada.</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 1:12-26</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 1:12-26</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<h3>Elecci&oacute;n de Mat&iacute;as para reemplazar a Judas</h3>

<p><sup class="versenum">12&nbsp;</sup>Entonces regresaron a Jerusal&eacute;n desde el monte llamado de los Olivos, situado aproximadamente a un kil&oacute;metro de la ciudad.<sup class="versenum">13&nbsp;</sup>Cuando llegaron, subieron al lugar donde se alojaban. Estaban all&iacute; Pedro, Juan, Jacobo, Andr&eacute;s, Felipe, Tom&aacute;s, Bartolom&eacute;, Mateo, Jacobo hijo de Alfeo, Sim&oacute;n el Zelote y Judas hijo de Jacobo.<sup class="versenum">14&nbsp;</sup>Todos, en un mismo esp&iacute;ritu, se dedicaban a la oraci&oacute;n, junto con las mujeres y con los hermanos de Jes&uacute;s y su madre Mar&iacute;a.</p>

<p><sup class="versenum">15&nbsp;</sup>Por aquellos d&iacute;as Pedro se puso de pie en medio de los creyentes, que eran un grupo como de ciento veinte personas,<sup class="versenum">16&nbsp;</sup>y les dijo: &laquo;Hermanos, ten&iacute;a que cumplirse la Escritura que, por boca de David, hab&iacute;a predicho el Esp&iacute;ritu Santo en cuanto a Judas, el que sirvi&oacute; de gu&iacute;a a los que arrestaron a Jes&uacute;s.<sup class="versenum">17&nbsp;</sup>Judas se contaba entre los nuestros y participaba en nuestro ministerio.<sup class="versenum">18&nbsp;</sup>(Con el dinero que obtuvo por su crimen, Judas compr&oacute; un terreno; all&iacute; cay&oacute; de cabeza, se revent&oacute;, y se le salieron las v&iacute;sceras.<sup class="versenum">19&nbsp;</sup>Todos en Jerusal&eacute;n se enteraron de ello, as&iacute; que aquel terreno fue llamado Ac&eacute;ldama, que en su propio idioma quiere decir &ldquo;Campo de Sangre&rdquo;).</p>

<p><sup class="versenum">20&nbsp;</sup>&raquo;Porque en el libro de los Salmos &mdash;continu&oacute; Pedro&mdash; est&aacute; escrito:</p>

<p>&raquo;&ldquo;Que su lugar quede desierto,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y que nadie lo habite&rdquo;.</p>
</div>

<p>Tambi&eacute;n est&aacute; escrito:</p>

<p>&raquo;&ldquo;Que otro se haga cargo de su oficio&rdquo;.</p>
</div>

<p><sup class="versenum">21-22&nbsp;</sup>Por tanto, es preciso que se una a nosotros un testigo de la resurrecci&oacute;n, uno de los que nos acompa&ntilde;aban todo el tiempo que el Se&ntilde;or Jes&uacute;s vivi&oacute; entre nosotros, desde que Juan bautizaba hasta el d&iacute;a en que Jes&uacute;s fue llevado de entre nosotros&raquo;.</p>

<p><sup class="versenum">23&nbsp;</sup>As&iacute; que propusieron a dos: a Jos&eacute;, llamado Barsab&aacute;s, apodado el Justo, y a Mat&iacute;as.<sup class="versenum">24&nbsp;</sup>Y oraron as&iacute;: &laquo;Se&ntilde;or, t&uacute; que conoces el coraz&oacute;n de todos, mu&eacute;stranos a cu&aacute;l de estos dos has elegido<sup class="versenum">25&nbsp;</sup>para que se haga cargo del servicio apost&oacute;lico que Judas dej&oacute; para irse al lugar que le correspond&iacute;a&raquo;.<sup class="versenum">26&nbsp;</sup>Luego echaron suertes y la elecci&oacute;n recay&oacute; en Mat&iacute;as; as&iacute; que &eacute;l fue reconocido junto con los once ap&oacute;stoles.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/302.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 1:12-26&nbsp;</button>
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
<p class="up">S&oacute;lo quedaban 120 disc&iacute;pulos juntos en Jerusal&eacute;n en este momento. La madre, los hermanos y las hermanas de Jes&uacute;s ahora estaban incluidos en la lista de creyentes. Esta historia muestra que, aunque sus nombres no fueron listados en los Evangelios, hubo muchos otros que siguieron a Jes&uacute;s desde el momento en que fue bautizado hasta que regres&oacute; al cielo. Jes&uacute;s seleccion&oacute; a los doce Ap&oacute;stoles iniciales de entre muchos posibles candidatos. Los once restantes determinaron que el criterio principal para seleccionar un reemplazo era la cantidad de tiempo que hab&iacute;an presenciado la vida y el ministerio de Jes&uacute;s. Esta es la &uacute;ltima vez que vemos la forma del Antiguo Testamento de echar lotes que se utilizan para tomar decisiones. Jes&uacute;s nunca us&oacute; el molde de lotes para discernir la voluntad del Padre porque &eacute;l escuch&oacute; y obedeci&oacute; al Esp&iacute;ritu. Despu&eacute;s de que el Esp&iacute;ritu es enviado, discernir la voluntad de Dios se hace a trav&eacute;s de someterse y mantenerse en sinton&iacute;a con el Esp&iacute;ritu.</p>

</div>

<p class="up">Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</p>

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

			<td class="social" @click="share('lesson', 'Matías elegido para reemplazar a Judas: ', '/content/M2/spa/multiply3/multiply302.html')">
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