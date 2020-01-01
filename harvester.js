// Transcrypt'ed from Python, 2019-12-31 17:49:48
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'harvester';
export var run_harvester = function (creep) {
	if (creep.memory.filling && _.sum (creep.carry) >= creep.carryCapacity) {
		creep.memory.filling = false;
		delete creep.memory.source;
	}
	else if (!(creep.memory.filling) && creep.carry.energy <= 0) {
		creep.memory.filling = true;
		delete creep.memory.target;
	}
	if (creep.memory.filling) {
		if (creep.memory.source) {
			var source = Game.getObjectById (creep.memory.source);
		}
		else {
			var source = _.sample (creep.room.find (FIND_SOURCES));
			creep.memory.source = source.id;
		}
		if (creep.pos.isNearTo (source)) {
			var result = creep.harvest (source);
			if (result != OK) {
				print ('[{}] Unknown result from creep.harvest({}): {}'.format (creep.name, source, result));
			}
		}
		else {
			creep.moveTo (source);
		}
	}
	else {
		if (creep.memory.target) {
			var target = Game.getObjectById (creep.memory.target);
		}
		else {
			var target = _ (creep.room.find (FIND_STRUCTURES)).filter ((function __lambda__ (s) {
				return (s.structureType == STRUCTURE_SPAWN || s.structureType == STRUCTURE_EXTENSION) && s.energy < s.energyCapacity || s.structureType == STRUCTURE_CONTROLLER;
			})).sample ();
			creep.memory.target = target.id;
		}
		if (target.energyCapacity) {
			var is_close = creep.pos.isNearTo (target);
		}
		else {
			var is_close = creep.pos.inRangeTo (target, 3);
		}
		if (is_close) {
			if (target.energyCapacity) {
				var result = creep.transfer (target, RESOURCE_ENERGY);
				if (result == OK || result == ERR_FULL) {
					delete creep.memory.target;
				}
				else {
					print ('[{}] Unknown result from creep.transfer({}, {}): {}'.format (creep.name, target, RESOURCE_ENERGY, result));
				}
			}
			else {
				var result = creep.upgradeController (target);
				if (result != OK) {
					var print_string = '[{}] ';
					print_string += 'Unknown result from creep.upgradeController';
					print_string += '({}): {}';
					print_string.format (creep.name, target, result);
					print (print_string);
				}
				if (!(creep.pos.inRangeTo (target, 2))) {
					creep.moveTo (target);
				}
			}
		}
		else {
			creep.moveTo (target);
		}
	}
};

//# sourceMappingURL=harvester.map