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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-hope-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>7.</h1></div>
                        <div class="chapter_title ltr"><h1>La Esperanza te está esperando</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<div>
<h2>1. Cuidado:</h2>

<ul>
	<li>Dales la oportunidad de compartir brevemente c&oacute;mo est&aacute;n y escuchar..</li>
</ul>

<h2>2. Rendici&oacute;n de cuentas:</h2>

<ul>
	<li>Pregunte c&oacute;mo obedecieron a Jes&uacute;s la semana pasada</li>
	<li>Pregunte con qui&eacute;n compartieron la historia la semana pasada</li>
</ul>
</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<h2>3. Contexto</h2>


<button id="MC2/spa/video/hope/07-100.mp4" type="button" class="external-movie">
         Mira &nbsp;Contexto de la historia&nbsp; en línea</button>
    <div class="collapsed"></div>

<h2>4. Descubre la Biblia juntos:</h2>

<ul>
	<li>Contar la historia de memoria</li>
	<li>Volver a contar la historia juntos</li>
	<li>Lean la historia juntos de la Biblia</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 15:11-32</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Par&aacute;bola del hijo perdido</h3>

<p><sup class="versenum">11&nbsp;</sup>&raquo;Un hombre ten&iacute;a dos hijos &mdash;continu&oacute; Jes&uacute;s&mdash;.<sup class="versenum">12&nbsp;</sup>El menor de ellos le dijo a su padre: &ldquo;Pap&aacute;, dame lo que me toca de la herencia&rdquo;. As&iacute; que el padre reparti&oacute; sus bienes entre los dos.<sup class="versenum">13&nbsp;</sup>Poco despu&eacute;s el hijo menor junt&oacute; todo lo que ten&iacute;a y se fue a un pa&iacute;s lejano; all&iacute; vivi&oacute; desenfrenadamente y derroch&oacute; su herencia.</p>

<p><sup class="versenum">14&nbsp;</sup>&raquo;Cuando ya lo hab&iacute;a gastado todo, sobrevino una gran escasez en la regi&oacute;n, y &eacute;l comenz&oacute; a pasar necesidad.<sup class="versenum">15&nbsp;</sup>As&iacute; que fue y consigui&oacute; empleo con un ciudadano de aquel pa&iacute;s, quien lo mand&oacute; a sus campos a cuidar cerdos.<sup class="versenum">16&nbsp;</sup>Tanta hambre ten&iacute;a que hubiera querido llenarse el est&oacute;mago con la comida que daban a los cerdos, pero aun as&iacute; nadie le daba nada.<sup class="versenum">17&nbsp;</sup>Por fin recapacit&oacute; y se dijo: &ldquo;&iexcl;Cu&aacute;ntos jornaleros de mi padre tienen comida de sobra, y yo aqu&iacute; me muero de hambre!<sup class="versenum">18&nbsp;</sup>Tengo que volver a mi padre y decirle: Pap&aacute;, he pecado contra el cielo y contra ti.<sup class="versenum">19&nbsp;</sup>Ya no merezco que se me llame tu hijo; tr&aacute;tame como si fuera uno de tus jornaleros&rdquo;.<sup class="versenum">20&nbsp;</sup>As&iacute; que emprendi&oacute; el viaje y se fue a su padre.</p>

<p>&raquo;Todav&iacute;a estaba lejos cuando su padre lo vio y se compadeci&oacute; de &eacute;l; sali&oacute; corriendo a su encuentro, lo abraz&oacute; y lo bes&oacute;.<sup class="versenum">21&nbsp;</sup>El joven le dijo: &ldquo;Pap&aacute;, he pecado contra el cielo y contra ti. Ya no merezco que se me llame tu hijo&rdquo;.<sup class="versenum">22&nbsp;</sup>Pero el padre orden&oacute; a sus siervos: &ldquo;&iexcl;Pronto! Traigan la mejor ropa para vestirlo. P&oacute;nganle tambi&eacute;n un anillo en el dedo y sandalias en los pies.<sup class="versenum">23&nbsp;</sup>Traigan el ternero m&aacute;s gordo y m&aacute;tenlo para celebrar un banquete.<sup class="versenum">24&nbsp;</sup>Porque este hijo m&iacute;o estaba muerto, pero ahora ha vuelto a la vida; se hab&iacute;a perdido, pero ya lo hemos encontrado&rdquo;. As&iacute; que empezaron a hacer fiesta.</p>

<p><sup class="versenum">25&nbsp;</sup>&raquo;Mientras tanto, el hijo mayor estaba en el campo. Al volver, cuando se acerc&oacute; a la casa, oy&oacute; la m&uacute;sica del baile.<sup class="versenum">26&nbsp;</sup>Entonces llam&oacute; a uno de los siervos y le pregunt&oacute; qu&eacute; pasaba.<sup class="versenum">27&nbsp;</sup>&ldquo;Ha llegado tu hermano &mdash;le respondi&oacute;&mdash;, y tu pap&aacute; ha matado el ternero m&aacute;s gordo porque ha recobrado a su hijo sano y salvo&rdquo;.<sup class="versenum">28&nbsp;</sup>Indignado, el hermano mayor se neg&oacute; a entrar. As&iacute; que su padre sali&oacute; a suplicarle que lo hiciera.<sup class="versenum">29&nbsp;</sup>Pero &eacute;l le contest&oacute;: &ldquo;&iexcl;F&iacute;jate cu&aacute;ntos a&ntilde;os te he servido sin desobedecer jam&aacute;s tus &oacute;rdenes, y ni un cabrito me has dado para celebrar una fiesta con mis amigos!<sup class="versenum">30&nbsp;</sup>&iexcl;Pero ahora llega ese hijo tuyo, que ha despilfarrado tu fortuna con prostitutas, y t&uacute; mandas matar en su honor el ternero m&aacute;s gordo!&rdquo;</p>

<p><sup class="versenum">31&nbsp;</sup>&raquo;&ldquo;Hijo m&iacute;o &mdash;le dijo su padre&mdash;, t&uacute; siempre est&aacute;s conmigo, y todo lo que tengo es tuyo.<sup class="versenum">32&nbsp;</sup>Pero ten&iacute;amos que hacer fiesta y alegrarnos, porque este hermano tuyo estaba muerto, pero ahora ha vuelto a la vida; se hab&iacute;a perdido, pero ya lo hemos encontrado&rdquo;&raquo;.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/hope/07.mp4" type="button" class="external-movie">
         Mira &nbsp;Lucas 15:11-32&nbsp;</button>
    <div class="collapsed"></div>

<ul>
	<li>Comenten juntos sobre la historia usando las siguientes preguntas:
	<ul>
		<li>&iquest;Qu&eacute; aprendemos acerca de Jes&uacute;s?</li>
		<li>&iquest;Qu&eacute; aprendemos de las personas?</li>
		<li>&iquest;Con qui&eacute;n te identificas m&aacute;s y por qu&eacute;?</li>
		<li>Haga un llamado: Pregunte: &quot;&iquest;Qu&eacute; le impide hoy seguir a Jes&uacute;s?&quot;</li>
	</ul>
	</li>
</ul>

<h2>5. Pr&aacute;ctica:</h2>

<ul>
	<li>Formen parejas y practiquen contando la historia unos con otros</li>
</ul>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<h2>6. Establecer objetivos:</h2>

<ul>
	<li>&iquest;Qu&eacute; de la historia te est&aacute; pidiendo Jes&uacute;s que obedezcas esta semana?</li>
	<li>&iquest;Qui&eacute;n en tu vida que crees que necesita escuchar esta historia?</li>
</ul>

<h2>7. Oren</h2>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'La Esperanza te está esperando: ', '/content/M2/spa/hope/hope07.html')">
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