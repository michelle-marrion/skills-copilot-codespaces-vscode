function skillsMember()
{
    return
    {
        restrict : 'E',
        templateUrl : 'modules/skills/views/member.html',
        controller : 'SkillsMenberController',
        controllerAs : 'vm',
        bindToController : True,
        scope:
        {
            member: '='
        }
    };
}