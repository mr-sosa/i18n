import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en.json";

ReactDOM.render(
	<IntlProvider locale={navigator.language} messages= {(navigator.language === 'en-US')? localeEnMessages: localeEsMessages}>
		<JobsList ln={navigator.language} />
	</IntlProvider>, document.getElementById("root")
);