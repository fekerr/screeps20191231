// Transcrypt'ed from Python, 2019-12-31 17:49:48
var harvester = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_harvester__ from './harvester.js';
__nest__ (harvester, '', __module_harvester__);
var __name__ = '__main__';
export var main = function () {
	for (var name of Object.keys (Game.creeps)) {
		var creep = Game.creeps [name];
		harvester.run_harvester (creep);
	}
	for (var name of Object.keys (Game.spawns)) {
		var spawn = Game.spawns [name];
		if (!(spawn.spawning)) {
			var num_creeps = _.sum (Game.creeps, (function __lambda__ (c) {
				return c.pos.roomName == spawn.pos.roomName;
			}));
			if (num_creeps < 0 && spawn.room.energyAvailable >= 250) {
				spawn.createCreep ([WORK, CARRY, MOVE, MOVE]);
			}
			else if (num_creeps < 15 && spawn.room.energyAvailable >= spawn.room.energyCapacityAvailable) {
				if (spawn.room.energyCapacityAvailable >= 350) {
					spawn.createCreep ([WORK, CARRY, CARRY, MOVE, MOVE, MOVE]);
				}
				else {
					spawn.createCreep ([WORK, CARRY, MOVE, MOVE]);
				}
			}
		}
	}
};
module.exports.loop = main;

//# sourceMappingURL=main.map