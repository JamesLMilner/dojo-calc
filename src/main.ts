import { ProjectorMixin } from '@dojo/widget-core/mixins/Projector';
import Calc from './widgets/Calc';

const root = document.querySelector('calculator') || undefined;

const Projector = ProjectorMixin(Calc);
const projector = new Projector();

projector.append(root);
