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
                        <div class="chapter_number ltr"><h1>42.</h1></div>
                        <div class="chapter_title ltr"><h1>Jesús, Luz del mundo</h1></div>
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
	<li class="back">Lea o vea <strong>Juan 9:1-41</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 9</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s sana a un ciego de nacimiento</h3>

<p><sup class="versenum">1 </sup>A su paso, Jes&uacute;s vio a un hombre que era ciego de nacimiento.<sup class="versenum">2&nbsp;</sup>Y sus disc&iacute;pulos le preguntaron:</p>

<p>&mdash;Rab&iacute;, para que este hombre haya nacido ciego, &iquest;qui&eacute;n pec&oacute;, &eacute;l o sus padres?</p>

<p><sup class="versenum">3&nbsp;</sup>&mdash;Ni &eacute;l pec&oacute;, ni sus padres &mdash;respondi&oacute; Jes&uacute;s&mdash;, sino que esto sucedi&oacute; para que la obra de Dios se hiciera evidente en su vida.<sup class="versenum">4&nbsp;</sup>Mientras sea de d&iacute;a, tenemos que llevar a cabo la obra del que me envi&oacute;. Viene la noche cuando nadie puede trabajar.<sup class="versenum">5&nbsp;</sup>Mientras est&eacute; yo en el mundo, luz soy del mundo.</p>

<p><sup class="versenum">6&nbsp;</sup>Dicho esto, escupi&oacute; en el suelo, hizo barro con la saliva y se lo unt&oacute; en los ojos al ciego, dici&eacute;ndole:</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;Ve y l&aacute;vate en el estanque de Silo&eacute; (que significa: Enviado).</p>

<p>El ciego fue y se lav&oacute;, y al volver ya ve&iacute;a.</p>

<p><sup class="versenum">8&nbsp;</sup>Sus vecinos y los que lo hab&iacute;an visto pedir limosna dec&iacute;an: &laquo;&iquest;No es este el que se sienta a mendigar?&raquo;<sup class="versenum">9&nbsp;</sup>Unos aseguraban: &laquo;S&iacute;, es &eacute;l&raquo;. Otros dec&iacute;an: &laquo;No es &eacute;l, sino que se le parece&raquo;. Pero &eacute;l insist&iacute;a: &laquo;Soy yo&raquo;.</p>

<p><sup class="versenum">10&nbsp;</sup>&mdash;&iquest;C&oacute;mo entonces se te han abierto los ojos? &mdash;le preguntaron.</p>

<p><sup class="versenum">11&nbsp;</sup>&mdash;Ese hombre que se llama Jes&uacute;s hizo un poco de barro, me lo unt&oacute; en los ojos y me dijo: &ldquo;Ve y l&aacute;vate en Silo&eacute;&rdquo;. As&iacute; que fui, me lav&eacute;, y entonces pude ver.</p>

<p><sup class="versenum">12&nbsp;</sup>&mdash;&iquest;Y d&oacute;nde est&aacute; ese hombre? &mdash;le preguntaron.</p>

<p>&mdash;No lo s&eacute; &mdash;respondi&oacute;.</p>

<h3>Las autoridades investigan la sanidad del ciego</h3>

<p><sup class="versenum">13&nbsp;</sup>Llevaron ante los fariseos al que hab&iacute;a sido ciego.<sup class="versenum">14&nbsp;</sup>Era s&aacute;bado cuando Jes&uacute;s hizo el barro y le abri&oacute; los ojos al ciego.<sup class="versenum">15&nbsp;</sup>Por eso los fariseos, a su vez, le preguntaron c&oacute;mo hab&iacute;a recibido la vista.</p>

<p>&mdash;Me unt&oacute; barro en los ojos, me lav&eacute;, y ahora veo &mdash;respondi&oacute;.</p>

<p><sup class="versenum">16&nbsp;</sup>Algunos de los fariseos comentaban: &laquo;Ese hombre no viene de parte de Dios, porque no respeta el s&aacute;bado&raquo;. Otros objetaban: &laquo;&iquest;C&oacute;mo puede un pecador hacer semejantes se&ntilde;ales?&raquo; Y hab&iacute;a desacuerdo entre ellos.</p>

<p><sup class="versenum">17&nbsp;</sup>Por eso interrogaron de nuevo al ciego:</p>

<p>&mdash;&iquest;Y qu&eacute; opinas t&uacute; de &eacute;l? Fue a ti a quien te abri&oacute; los ojos.</p>

<p>&mdash;Yo digo que es profeta &mdash;contest&oacute;.</p>

<p><sup class="versenum">18&nbsp;</sup>Pero los jud&iacute;os no cre&iacute;an que el hombre hubiera sido ciego y que ahora viera, y hasta llamaron a sus padres<sup class="versenum">19&nbsp;</sup>y les preguntaron:</p>

<p>&mdash;&iquest;Es este su hijo, el que dicen ustedes que naci&oacute; ciego? &iquest;C&oacute;mo es que ahora puede ver?</p>

<p><sup class="versenum">20&nbsp;</sup>&mdash;Sabemos que este es nuestro hijo &mdash;contestaron los padres&mdash;, y sabemos tambi&eacute;n que naci&oacute; ciego.<sup class="versenum">21&nbsp;</sup>Lo que no sabemos es c&oacute;mo ahora puede ver, ni qui&eacute;n le abri&oacute; los ojos. Preg&uacute;ntenselo a &eacute;l, que ya es mayor de edad y puede responder por s&iacute; mismo.</p>

<p><sup class="versenum">22&nbsp;</sup>Sus padres contestaron as&iacute; por miedo a los jud&iacute;os, pues ya estos hab&iacute;an convenido que se expulsara de la sinagoga a todo el que reconociera que Jes&uacute;s era el Cristo.<sup class="versenum">23&nbsp;</sup>Por eso dijeron sus padres: &laquo;Preg&uacute;ntenselo a &eacute;l, que ya es mayor de edad&raquo;.</p>

<p><sup class="versenum">24&nbsp;</sup>Por segunda vez llamaron los jud&iacute;os al que hab&iacute;a sido ciego, y le dijeron:</p>

<p>&mdash;&iexcl;Da gloria a Dios! A nosotros nos consta que ese hombre es pecador.</p>

<p><sup class="versenum">25&nbsp;</sup>&mdash;Si es pecador, no lo s&eacute; &mdash;respondi&oacute; el hombre&mdash;. Lo &uacute;nico que s&eacute; es que yo era ciego y ahora veo.</p>

<p><sup class="versenum">26&nbsp;</sup>Pero ellos le insistieron:</p>

<p>&mdash;&iquest;Qu&eacute; te hizo? &iquest;C&oacute;mo te abri&oacute; los ojos?</p>

<p><sup class="versenum">27&nbsp;</sup>&mdash;Ya les dije y no me hicieron caso. &iquest;Por qu&eacute; quieren o&iacute;rlo de nuevo? &iquest;Es que tambi&eacute;n ustedes quieren hacerse sus disc&iacute;pulos?</p>

<p><sup class="versenum">28&nbsp;</sup>Entonces lo insultaron y le dijeron:</p>

<p>&mdash;&iexcl;Disc&iacute;pulo de ese lo ser&aacute;s t&uacute;! &iexcl;Nosotros somos disc&iacute;pulos de Mois&eacute;s!<sup class="versenum">29&nbsp;</sup>Y sabemos que a Mois&eacute;s le habl&oacute; Dios; pero de este no sabemos ni de d&oacute;nde sali&oacute;.</p>

<p><sup class="versenum">30&nbsp;</sup>&mdash;&iexcl;All&iacute; est&aacute; lo sorprendente! &mdash;respondi&oacute; el hombre&mdash;: que ustedes no sepan de d&oacute;nde sali&oacute;, y que a m&iacute; me haya abierto los ojos.<sup class="versenum">31&nbsp;</sup>Sabemos que Dios no escucha a los pecadores, pero s&iacute; a los piadosos y a quienes hacen su voluntad.<sup class="versenum">32&nbsp;</sup>Jam&aacute;s se ha sabido que alguien le haya abierto los ojos a uno que naci&oacute; ciego.<sup class="versenum">33&nbsp;</sup>Si este hombre no viniera de parte de Dios, no podr&iacute;a hacer nada.</p>

<p><sup class="versenum">34&nbsp;</sup>Ellos replicaron:</p>

<p>&mdash;T&uacute;, que naciste sumido en pecado, &iquest;vas a darnos lecciones?</p>

<p>Y lo expulsaron.</p>

<h3>La ceguera espiritual</h3>

<p><sup class="versenum">35&nbsp;</sup>Jes&uacute;s se enter&oacute; de que hab&iacute;an expulsado a aquel hombre, y al encontrarlo le pregunt&oacute;:</p>

<p>&mdash;&iquest;Crees en el Hijo del hombre?</p>

<p><sup class="versenum">36&nbsp;</sup>&mdash;&iquest;Qui&eacute;n es, Se&ntilde;or? D&iacute;melo, para que crea en &eacute;l.</p>

<p><sup class="versenum">37&nbsp;</sup>&mdash;Pues ya lo has visto &mdash;le contest&oacute; Jes&uacute;s&mdash;; es el que est&aacute; hablando contigo.</p>

<p><sup class="versenum">38&nbsp;</sup>&mdash;Creo, Se&ntilde;or &mdash;declar&oacute; el hombre.</p>

<p>Y, postr&aacute;ndose, lo ador&oacute;.</p>

<p><sup class="versenum">39&nbsp;</sup>Entonces Jes&uacute;s dijo:</p>

<p>&mdash;Yo he venido a este mundo para juzgarlo, para que los ciegos vean, y los que ven se queden ciegos.</p>

<p><sup class="versenum">40&nbsp;</sup>Algunos fariseos que estaban con &eacute;l, al o&iacute;rlo hablar as&iacute;, le preguntaron:</p>

<p>&mdash;&iquest;Qu&eacute;? &iquest;Acaso tambi&eacute;n nosotros somos ciegos?</p>

<p><sup class="versenum">41&nbsp;</sup>Jes&uacute;s les contest&oacute;:</p>

<p>&mdash;Si fueran ciegos, no ser&iacute;an culpables de pecado, pero, como afirman que ven, su pecado permanece.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/242.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 9:1-41&nbsp;</button>
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
<p class="up">Jes&uacute;s asiste a otra fiesta, la Fiesta de la Dedicaci&oacute;n (o Fiesta de las Luces). Esto fue para recordar un momento en que Dios hizo un milagro para proporcionar luz en las l&aacute;mparas cuando no hab&iacute;a suficiente aceite para que siguieran ardiendo. En la fiesta, Jes&uacute;s se encuentra con un hombre ciego de nacimiento. La mayor&iacute;a de la gente cre&iacute;a que si alguien estaba sufriendo era porque ellos o alguien cercano a ellos hab&iacute;an pecado. Jes&uacute;s sorprende a los que lo rodean diciendo que este hombre naci&oacute; ciego no a causa del pecado, sino para que la gloria de Dios se mostrara en Su vida. &Eacute;l ense&ntilde;&oacute; un principio asombroso: Dios puede permitir el sufrimiento para que &eacute;l pueda ser glorificado. Es importante recordar que Dios es el centro de la vida. &Eacute;l obtiene gloria cuando responde a las personas que lo llaman con una necesidad. Una lecci&oacute;n para nosotros es tener cuidado al juzgar por qu&eacute; alguien est&aacute; sufriendo. El sufrimiento puede no ser el resultado de nada de lo que han hecho, sino debido a la obra que Dios har&aacute; en sus vidas.</p>

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

			<td class="social" @click="share('lesson', 'Jesús, Luz del mundo: ', '/content/M2/spa/multiply2/multiply242.html')">
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