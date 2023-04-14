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
                        <div class="chapter_number ltr"><h1>41.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo, gracia y compasión</h1></div>
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
	<li class="back">Lea o vea <strong>Juan 7:1-8:11</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 7:1-8:11</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s va a la fiesta de los Tabern&aacute;culos</h3>

<p><sup class="versenum">1 </sup>Alg&uacute;n tiempo despu&eacute;s, Jes&uacute;s andaba por Galilea. No ten&iacute;a ning&uacute;n inter&eacute;s en ir a Judea, porque all&iacute; los jud&iacute;os buscaban la oportunidad para matarlo.<sup class="versenum">2&nbsp;</sup>Faltaba poco tiempo para la fiesta jud&iacute;a de los Tabern&aacute;culos,<sup class="versenum">3&nbsp;</sup>as&iacute; que los hermanos de Jes&uacute;s le dijeron:</p>

<p>&mdash;Deber&iacute;as salir de aqu&iacute; e ir a Judea, para que tus disc&iacute;pulos vean las obras que realizas,<sup class="versenum">4&nbsp;</sup>porque nadie que quiera darse a conocer act&uacute;a en secreto. Ya que haces estas cosas, deja que el mundo te conozca.</p>

<p><sup class="versenum">5&nbsp;</sup>Lo cierto es que ni siquiera sus hermanos cre&iacute;an en &eacute;l.<sup class="versenum">6&nbsp;</sup>Por eso Jes&uacute;s les dijo:</p>

<p>&mdash;Para ustedes cualquier tiempo es bueno, pero el tiempo m&iacute;o a&uacute;n no ha llegado.<sup class="versenum">7&nbsp;</sup>El mundo no tiene motivos para aborrecerlos; a m&iacute;, sin embargo, me aborrece porque yo testifico que sus obras son malas.<sup class="versenum">8&nbsp;</sup>Suban ustedes a la fiesta. Yo no voy todav&iacute;a a esta fiesta porque mi tiempo a&uacute;n no ha llegado.</p>

<p><sup class="versenum">9&nbsp;</sup>Dicho esto, se qued&oacute; en Galilea.<sup class="versenum">10&nbsp;</sup>Sin embargo, despu&eacute;s de que sus hermanos se fueron a la fiesta, fue tambi&eacute;n &eacute;l, no p&uacute;blicamente, sino en secreto.<sup class="versenum">11&nbsp;</sup>Por eso las autoridades jud&iacute;as lo buscaban durante la fiesta, y dec&iacute;an: &laquo;&iquest;D&oacute;nde se habr&aacute; metido?&raquo;</p>

<p><sup class="versenum">12&nbsp;</sup>Entre la multitud corr&iacute;an muchos rumores acerca de &eacute;l. Unos dec&iacute;an: &laquo;Es una buena persona&raquo;. Otros alegaban: &laquo;No, lo que pasa es que enga&ntilde;a a la gente&raquo;.<sup class="versenum">13&nbsp;</sup>Sin embargo, por temor a los jud&iacute;os nadie hablaba de &eacute;l abiertamente.</p>

<h3>Jes&uacute;s ense&ntilde;a en la fiesta</h3>

<p><sup class="versenum">14&nbsp;</sup>Jes&uacute;s esper&oacute; hasta la mitad de la fiesta para subir al templo y comenzar a ense&ntilde;ar.<sup class="versenum">15&nbsp;</sup>Los jud&iacute;os se admiraban y dec&iacute;an: &laquo;&iquest;De d&oacute;nde sac&oacute; este tantos conocimientos sin haber estudiado?&raquo;</p>

<p><sup class="versenum">16&nbsp;</sup>&mdash;Mi ense&ntilde;anza no es m&iacute;a &mdash;replic&oacute; Jes&uacute;s&mdash;, sino del que me envi&oacute;.<sup class="versenum">17&nbsp;</sup>El que est&eacute; dispuesto a hacer la voluntad de Dios reconocer&aacute; si mi ense&ntilde;anza proviene de Dios o si yo hablo por mi propia cuenta.<sup class="versenum">18&nbsp;</sup>El que habla por cuenta propia busca su vanagloria; en cambio, el que busca glorificar al que lo envi&oacute; es una persona &iacute;ntegra y sin doblez.<sup class="versenum">19&nbsp;</sup>&iquest;No les ha dado Mois&eacute;s la ley a ustedes? Sin embargo, ninguno de ustedes la cumple. &iquest;Por qu&eacute; tratan entonces de matarme?</p>

<p><sup class="versenum">20&nbsp;</sup>&mdash;Est&aacute;s endemoniado &mdash;contest&oacute; la multitud&mdash;. &iquest;Qui&eacute;n quiere matarte?</p>

<p><sup class="versenum">21&nbsp;</sup>&mdash;Hice un milagro y todos ustedes han quedado asombrados.<sup class="versenum">22&nbsp;</sup>Por eso Mois&eacute;s les dio la circuncisi&oacute;n, que en realidad no proviene de Mois&eacute;s, sino de los patriarcas, y aun en s&aacute;bado la practican.<sup class="versenum">23&nbsp;</sup>Ahora bien, si para cumplir la ley de Mois&eacute;s circuncidan a un var&oacute;n incluso en s&aacute;bado, &iquest;por qu&eacute; se enfurecen conmigo si en s&aacute;bado lo sano por completo?<sup class="versenum">24&nbsp;</sup>No juzguen por las apariencias; juzguen con justicia.</p>

<h3>&iquest;Es este el Cristo?</h3>

<p><sup class="versenum">25&nbsp;</sup>Algunos de los que viv&iacute;an en Jerusal&eacute;n comentaban: &laquo;&iquest;No es este al que quieren matar?<sup class="versenum">26&nbsp;</sup>Ah&iacute; est&aacute;, hablando abiertamente, y nadie le dice nada. &iquest;Ser&aacute; que las autoridades se han convencido de que es el Cristo?<sup class="versenum">27&nbsp;</sup>Nosotros sabemos de d&oacute;nde viene este hombre, pero cuando venga el Cristo nadie sabr&aacute; su procedencia&raquo;.</p>

<p><sup class="versenum">28&nbsp;</sup>Por eso Jes&uacute;s, que segu&iacute;a ense&ntilde;ando en el templo, exclam&oacute;:</p>

<p>&mdash;&iexcl;Con que ustedes me conocen y saben de d&oacute;nde vengo! No he venido por mi propia cuenta, sino que me envi&oacute; uno que es digno de confianza. Ustedes no lo conocen,<sup class="versenum">29&nbsp;</sup>pero yo s&iacute; lo conozco porque vengo de parte suya, y &eacute;l mismo me ha enviado.</p>

<p><sup class="versenum">30&nbsp;</sup>Entonces quisieron arrestarlo, pero nadie le ech&oacute; mano porque a&uacute;n no hab&iacute;a llegado su hora.<sup class="versenum">31&nbsp;</sup>Con todo, muchos de entre la multitud creyeron en &eacute;l y dec&iacute;an: &laquo;Cuando venga el Cristo, &iquest;acaso va a hacer m&aacute;s se&ntilde;ales que este hombre?&raquo;</p>

<p><sup class="versenum">32&nbsp;</sup>Los fariseos oyeron a la multitud que murmuraba estas cosas acerca de &eacute;l, y junto con los jefes de los sacerdotes mandaron unos guardias del templo para arrestarlo.</p>

<p><sup class="versenum">33&nbsp;</sup>&mdash;Voy a estar con ustedes un poco m&aacute;s de tiempo &mdash;afirm&oacute; Jes&uacute;s&mdash;, y luego volver&eacute; al que me envi&oacute;.<sup class="versenum">34&nbsp;</sup>Me buscar&aacute;n, pero no me encontrar&aacute;n, porque adonde yo est&eacute; no podr&aacute;n ustedes llegar.</p>

<p><sup class="versenum">35&nbsp;</sup>&laquo;&iquest;Y este a d&oacute;nde piensa irse que no podamos encontrarlo? &mdash;comentaban entre s&iacute; los jud&iacute;os&mdash;. &iquest;Ser&aacute; que piensa ir a nuestra gente dispersa entre las naciones, para ense&ntilde;ar a los griegos?<sup class="versenum">36&nbsp;</sup>&iquest;Qu&eacute; quiso decir con eso de que &ldquo;me buscar&aacute;n, pero no me encontrar&aacute;n&rdquo;, y &ldquo;adonde yo est&eacute; no podr&aacute;n ustedes llegar&rdquo;?&raquo;</p>

<h3>Jes&uacute;s en el &uacute;ltimo d&iacute;a de la fiesta</h3>

<p><sup class="versenum">37&nbsp;</sup>En el &uacute;ltimo d&iacute;a, el m&aacute;s solemne de la fiesta, Jes&uacute;s se puso de pie y exclam&oacute;:</p>

<p>&mdash;&iexcl;Si alguno tiene sed, que venga a m&iacute; y beba!<sup class="versenum">38&nbsp;</sup>De aquel que cree en m&iacute;, como dice la Escritura, brotar&aacute;n r&iacute;os de agua viva.</p>

<p><sup class="versenum">39&nbsp;</sup>Con esto se refer&iacute;a al Esp&iacute;ritu que habr&iacute;an de recibir m&aacute;s tarde los que creyeran en &eacute;l. Hasta ese momento el Esp&iacute;ritu no hab&iacute;a sido dado, porque Jes&uacute;s no hab&iacute;a sido glorificado todav&iacute;a.</p>

<p><sup class="versenum">40&nbsp;</sup>Al o&iacute;r sus palabras, algunos de entre la multitud dec&iacute;an: &laquo;Verdaderamente este es el profeta&raquo;.<sup class="versenum">41&nbsp;</sup>Otros afirmaban: &laquo;&iexcl;Es el Cristo!&raquo; Pero otros objetaban: &laquo;&iquest;C&oacute;mo puede el Cristo venir de Galilea?<sup class="versenum">42&nbsp;</sup>&iquest;Acaso no dice la Escritura que el Cristo vendr&aacute; de la descendencia de David, y de Bel&eacute;n, el pueblo de donde era David?&raquo;<sup class="versenum">43&nbsp;</sup>Por causa de Jes&uacute;s la gente estaba dividida.<sup class="versenum">44&nbsp;</sup>Algunos quer&iacute;an arrestarlo, pero nadie le puso las manos encima.</p>

<h3>Incredulidad de los dirigentes jud&iacute;os</h3>

<p><sup class="versenum">45&nbsp;</sup>Los guardias del templo volvieron a los jefes de los sacerdotes y a los fariseos, quienes los interrogaron:</p>

<p>&mdash;&iquest;Se puede saber por qu&eacute; no lo han tra&iacute;do?</p>

<p><sup class="versenum">46&nbsp;</sup>&mdash;&iexcl;Nunca nadie ha hablado como ese hombre! &mdash;declararon los guardias.</p>

<p><sup class="versenum">47&nbsp;</sup>&mdash;&iquest;As&iacute; que tambi&eacute;n ustedes se han dejado enga&ntilde;ar? &mdash;replicaron los fariseos&mdash;.<sup class="versenum">48&nbsp;</sup>&iquest;Acaso ha cre&iacute;do en &eacute;l alguno de los gobernantes o de los fariseos?<sup class="versenum">49&nbsp;</sup>&iexcl;No! Pero esta gente, que no sabe nada de la ley, est&aacute; bajo maldici&oacute;n.</p>

<p><sup class="versenum">50&nbsp;</sup>Nicodemo, que era uno de ellos y que antes hab&iacute;a ido a ver a Jes&uacute;s, les interpel&oacute;:</p>

<p><sup class="versenum">51&nbsp;</sup>&mdash;&iquest;Acaso nuestra ley condena a un hombre sin antes escucharlo y averiguar lo que hace?</p>

<p><sup class="versenum">52&nbsp;</sup>&mdash;&iquest;No eres t&uacute; tambi&eacute;n de Galilea? &mdash;protestaron&mdash;. Investiga y ver&aacute;s que de Galilea no ha salido ning&uacute;n profeta.</p>

<p><sup class="versenum">53&nbsp;</sup>Entonces todos se fueron a casa.</p>

<h3>La mujer sorprendida en adulterio</h3>

<p><sup class="versenum">1 </sup>Pero Jes&uacute;s se fue al monte de los Olivos.<sup class="versenum">2&nbsp;</sup>Al amanecer se present&oacute; de nuevo en el templo. Toda la gente se le acerc&oacute;, y &eacute;l se sent&oacute; a ense&ntilde;arles.<sup class="versenum">3&nbsp;</sup>Los maestros de la ley y los fariseos llevaron entonces a una mujer sorprendida en adulterio, y poni&eacute;ndola en medio del grupo<sup class="versenum">4&nbsp;</sup>le dijeron a Jes&uacute;s:</p>

<p>&mdash;Maestro, a esta mujer se le ha sorprendido en el acto mismo de adulterio.<sup class="versenum">5&nbsp;</sup>En la ley Mois&eacute;s nos orden&oacute; apedrear a tales mujeres. &iquest;T&uacute; qu&eacute; dices?</p>

<p><sup class="versenum">6&nbsp;</sup>Con esta pregunta le estaban tendiendo una trampa, para tener de qu&eacute; acusarlo. Pero Jes&uacute;s se inclin&oacute; y con el dedo comenz&oacute; a escribir en el suelo.<sup class="versenum">7&nbsp;</sup>Y, como ellos lo acosaban a preguntas, Jes&uacute;s se incorpor&oacute; y les dijo:</p>

<p>&mdash;Aquel de ustedes que est&eacute; libre de pecado, que tire la primera piedra.</p>

<p><sup class="versenum">8&nbsp;</sup>E inclin&aacute;ndose de nuevo, sigui&oacute; escribiendo en el suelo.<sup class="versenum">9&nbsp;</sup>Al o&iacute;r esto, se fueron retirando uno tras otro, comenzando por los m&aacute;s viejos, hasta dejar a Jes&uacute;s solo con la mujer, que a&uacute;n segu&iacute;a all&iacute;.<sup class="versenum">10&nbsp;</sup>Entonces &eacute;l se incorpor&oacute; y le pregunt&oacute;:</p>

<p>&mdash;Mujer, &iquest;d&oacute;nde est&aacute;n? &iquest;Ya nadie te condena?</p>

<p><sup class="versenum">11&nbsp;</sup>&mdash;Nadie, Se&ntilde;or.</p>

<p>&mdash;Tampoco yo te condeno. Ahora vete, y no vuelvas a pecar.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/241.mp4" type="button" class="external-movie">
         Mira Juan 7:1-8:11</button>
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
<p class="up">Jes&uacute;s y sus disc&iacute;pulos fueron a Jerusal&eacute;n durante la Fiesta anual de los Tabern&aacute;culos de siete d&iacute;as (o Fiesta de las Cabinas). Era una &eacute;poca en la que todos los hombres jud&iacute;os que pod&iacute;an viajar deb&iacute;an presentarse a Jerusal&eacute;n. Los hermanastros de Jes&uacute;s, que todav&iacute;a no cre&iacute;an en &Eacute;l, van a Jerusal&eacute;n sin &Eacute;l. M&aacute;s tarde, Jes&uacute;s llega a mitad de camino a trav&eacute;s de la Fiesta. &Eacute;l va al templo y comienza a ense&ntilde;ar acerca de qui&eacute;n es &Eacute;l. &Eacute;l revela que &Eacute;l es de la l&iacute;nea familiar de David, a pesar de que fue criado en Nazaret. Una discusi&oacute;n estalla y hay un mont&oacute;n de gritos acerca de Jes&uacute;s, pero &Eacute;l se escapa por la noche para pasar m&aacute;s tiempo con el Padre. Mientras tanto, los l&iacute;deres religiosos estaban discutiendo acerca de Jes&uacute;s. Uno de ellos, que antes se hab&iacute;a convertido en un creyente en Jes&uacute;s, trat&oacute; de influir en el grupo, pero lo ridiculizaron. Cuando Jes&uacute;s regres&oacute; a Jerusal&eacute;n, los l&iacute;deres religiosos trataron de atraparlo trayendo a una mujer atrapada en adulterio a &Eacute;l. Jes&uacute;s modela el liderazgo con gran sabidur&iacute;a, compasi&oacute;n, misericordia y gracia mientras desaf&iacute;a a los l&iacute;deres religiosos con su propio pecado y dureza de coraz&oacute;n.</p>

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

			<td class="social" @click="share('lesson', 'Liderazgo, gracia y compasión: ', '/content/M2/spa/multiply2/multiply241.html')">
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